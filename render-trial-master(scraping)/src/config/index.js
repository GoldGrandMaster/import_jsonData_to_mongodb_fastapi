import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const ENVIRONMENT = process.env.NODE_ENV;

const config = {};
console.log(`config in node env: ${ENVIRONMENT}`);
switch (ENVIRONMENT) {
  case "production":
    config.db = process.env.MONGO_PROD_URI;
    config.port = process.env.PROD_PORT;
  case "dev":
    config.db = process.env.MONGO_DEV_URI;
    config.port = process.env.DEV_PORT;
  default:
    config.db = process.env.MONGO_TEST_URI;
    config.port = process.env.TEST_PORT;
}

export default config;
