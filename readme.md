## Run fastapi app
uvicorn main:app --reload

curl -X POST -F "file=@data.json" http://localhost:8000/upload_json/

mongodb+srv://betterlogics:bll0077@atlascluster.do89alp.mongodb.net/?retryWrites=true&w=majority