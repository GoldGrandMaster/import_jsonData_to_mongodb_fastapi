import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { readSavedDocumnets, saveDocuments, scrollToBottom } from "../utils.js";

puppeteer.use(StealthPlugin());

export const getArticles = async (inputProps) => {
  try {
    if (!inputProps) return;
    const {
      name,
      url,
      linkSelector,
      articleSelectors,
      waitUntil,
      articlesWaitUntil = "domcontentloaded",
      Model,
      saveAfter = 1,
    } = inputProps;
    const currentSaved = await readSavedDocumnets(Model, name);
    const currentLinks = currentSaved.map((el) => el.link);
    console.log(currentLinks);

    // making sure articleWaitUntil has a correct value
    const articlesWaitUntilVal =
      articlesWaitUntil !== "domcontentloaded" &&
      articlesWaitUntil !== "networkidle0" &&
      articlesWaitUntil !== "networkidle2" &&
      articlesWaitUntil !== "load"
        ? "domcontentloaded"
        : articlesWaitUntil;

    const browser = await puppeteer.launch({
      headless: true,
    });

    // create a page and set its viewport
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 6000 });

    // navigate to url and wait for it to load
    const pageData = [];
    let baseUrl = [];
    if (!Array.isArray(url)) baseUrl.push(url);
    else baseUrl = url;
    for (let curr_url of baseUrl) {
      for (let selector of linkSelector) {
        try {
          await page.goto(curr_url, {
            waitUntil: "domcontentloaded",
            timeout: 0,
          });
        } catch {
          console.error(`Error navigating to link ${curr_url}.`);
          continue;
        }

        try {
          await scrollToBottom(page);
        } catch {
          console.log(
            `Error when trying to scroll to bottom of page ${curr_url}`
          );
        }

        if (waitUntil) {
          try {
            await page.waitForSelector(waitUntil.join(", "));
          } catch (err) {
            console.error(`Problem waiting for selector ${waitUntil}`);
          }
        }

        console.log(`NAVIGATED TO ${curr_url}`);

        try {
          await page.waitForSelector(selector);
        } catch (err) {
          console.error(`Problem waiting for selector ${selector}`);
        }

        const links = await page.$$eval(selector, (links) =>
          links.map((link) => link.href)
        );

        let pageCount = 1;
        let saveCount = 1;
        const totalPages = links.length;
        for (let link of links) {
          // checking if link is already fetched.
          if (currentLinks.includes(link)) {
            console.log("Link already fetched. Skipping link");
            pageCount++;
            continue;
          } else console.log("Link not found. Fetching link");

          console.log(`page ${pageCount} of ${totalPages}`);

          const currPage = await getPageData(link, page, articlesWaitUntilVal, {
            ...articleSelectors,
          });
          console.log("current page data: \n");
          console.log(currPage);
          if (
            currPage &&
            currPage.link &&
            currPage.title &&
            currPage.date &&
            currPage.article
          ) {
            console.log("pushing current page");
            currPage.siteName = name;
            pageData.push(currPage);
            currentLinks.push(...pageData.map((el) => el.link));
          }

          if (pageCount >= saveAfter * saveCount) {
            await saveDocuments(Model, pageData);
            // deleting all saved elements
            pageData.splice(0, pageData.length);
            saveCount++;
          }

          pageCount++;
        }
        await saveDocuments(Model, pageData);
        pageData.splice(0, pageData.length);
      }
    }

    await page.close();
    await browser.close();
    await saveDocuments(Model, pageData);
  } catch (err) {
    console.log("An error has occured when trying to fetch the page");
    console.log(err);
  }
};

const getPageData = async (
  link,
  page,
  articlesWaitUntil,
  { titleSelector, dateSelector, contentSelector, articleContentSelector }
) => {
  if (!link) {
    console.error("Error: link not found");
    return {};
  }
  console.log(`NAVIGATING TO ${link}`);

  try {
    await page.goto(link, {
      waitUntil: articlesWaitUntil,
      timeout: 75000,
    });
  } catch (err) {
    console.log(`Error when fetching link ${link}. Skipping link.`);
  }

  await page.setViewport({ width: 1000, height: 6000 });

  const currPageData = await page.evaluate(
    ({
      titleSelector,
      dateSelector,
      contentSelector,
      articleContentSelector,
    }) => {
      const getElement = (selectors, many = false) => {
        if (!Array.isArray(selectors)) {
          const element = many
            ? document.querySelectorAll(selectors)
            : document.querySelector(selectors);
          if (element) return element;
          return { empty: true };
        }

        const element = many
          ? document.querySelectorAll(selectors.join(", "))
          : document.querySelector(selectors.join(", "));
        if ((many && element.length > 0) || (!many && element)) return element;

        return { empty: true };
      };
      const title = getElement(titleSelector, false).innerText;

      // getting date
      let dateAttrSelector = "";
      let dateElementSelector = "";
      for (let currDateSelector of dateSelector) {
        if (currDateSelector && currDateSelector.split("?").length > 1) {
          let dateGetter = currDateSelector.split("?");
          dateElementSelector = dateGetter[0];
          dateAttrSelector = dateGetter[1];
          if (
            dateSelector.indexOf(dateElementSelector) !==
            dateSelector.length - 1
          )
            dateElementSelector += ", ";
        } else {
          dateElementSelector += `${currDateSelector}`;
          dateAttrSelector = "";
          if (
            dateSelector.indexOf(currDateSelector) !==
            dateSelector.length - 1
          )
            dateElementSelector += ", ";
        }
      }
      const dateTimeElement = getElement(dateElementSelector, false);
      const dateTime =
        !dateTimeElement.empty &&
        dateAttrSelector &&
        dateTimeElement.getAttribute(dateAttrSelector)
          ? dateTimeElement.getAttribute(dateAttrSelector)
          : dateTimeElement.innerText;

      const content = getElement(contentSelector, false).innerText;
      const articleContent = Array.from(
        getElement(articleContentSelector, true)
      )
        .map((curr_content) => curr_content.innerText)
        .filter((content_text) => content_text.length > 0)
        .join("\n");
      return {
        title,
        date: dateTime,
        content,
        article: articleContent,
      };
    },
    {
      titleSelector,
      dateSelector,
      contentSelector,
      articleContentSelector,
    }
  );
  if (!currPageData) return {};
  currPageData.link = link;
  return currPageData;
};
