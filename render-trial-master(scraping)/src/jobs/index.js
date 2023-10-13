import Agenda from "agenda";
import config from "../config/index.js";

const db_uri = config.db;
if (!db_uri) {
  console.log("Database uri not found in Agenda.");
}
const agenda = new Agenda({
  db: { address: db_uri, collection: "scrapperJobs" },
});

agenda.on("ready", async () => {
  console.log("Agenda started");
  // await agenda.every("6 hours", "scrape-all-sites");
  // await agenda.start();
});
agenda.on("error", (err) =>
  console.log(`Error occured when starting agenda\n ${err.message}`)
);

export default agenda;
