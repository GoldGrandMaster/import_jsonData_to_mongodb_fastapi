import { promisify } from "util";
import { fileURLToPath } from "url";

/// puppeteer helpers

// function to scroll to the bottom of the page.
export const scrollToBottom = async (
  page,
  scroll_delay = 500,
  max_scroll_time = 15
) => {
  let curr_scroll = parseInt(await page.evaluate("window.scrollY"));
  let new_scroll = parseInt(await page.evaluate("window.scrollY"));
  let curr_scroll_time = 0;

  do {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    curr_scroll = parseInt(await page.evaluate("window.scrollY"));
    await page.evaluate(`
      window.scrollTo({
        top: ${curr_scroll + 1000},
        behaviour: 'smooth'
      })
      `);
    new_scroll = parseInt(await page.evaluate("window.scrollY"));
    curr_scroll_time++;
    await sleep(scroll_delay);
  } while (curr_scroll !== new_scroll && curr_scroll_time < max_scroll_time);
};

/// mongoose helpers

// function for saving documents to mongo
export const saveDocuments = async (Model, data) => {
  const response = await Model.insertMany(data);
  return response;
};

// function for reading saved documents from mongo

export const readSavedDocumnets = async (Model, siteName) => {
  const res = await Model.find({ siteName });
  if (res.length == 0) {
    console.log(
      `No documents found in the collection ${Model.collection.collectionName} with site name ${siteName}.`
    );
  } else {
    console.log(
      `Found ${res.length} documents in collection ${Model.collection.collectionName} with site name ${siteName}.`
    );
  }

  return res;
};

// Miscelaneous helpers

// Promisifying setTimeout for using in async / await.
export const sleep = promisify(setTimeout);

// function to check if file is called or imported
export const checkIsEntryFile = (filename) => {
  const cleanFileName = fileURLToPath(filename);
  const entryFile = process.argv[1];

  return entryFile === cleanFileName;
};
