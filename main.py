from fastapi import FastAPI, File, UploadFile, HTTPException
from pymongo import MongoClient
import json

app = FastAPI()

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["news-test"]
collection = db["stage1"]

@app.get("/")
async def root():
  return {"message": "Hello World"}

@app.post("/upload_json/")
async def upload_json_and_save_to_mongodb(file: UploadFile):
  try:
    data  = await file.read()
    json_str = data.decode('utf-8')
    json_str = json_str.replace('$', 'u')
    json_data = json.loads(json_str)

    # Check if the data is a list of documents or a single document
    if isinstance(json_data, list):
      collection.insert_many(json_data)
    else:
      collection.insert_one(json_data)
    
    return {"message": "JSON data uploaded and saved to MongoDB successfully"}
  except Exception as e:
    raise HTTPException(status_code=400, detail=f"Error: {str(e)}")

# Close the MongoDB connection when the FastAPI app is shut down
@app.on_event("shutdown")
def shutdown_mongodb_client():
  client.close()

if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app, host="0.0.0.0", port=8000)
