import pymongo
import json
import os
from dotenv import load_dotenv

load_dotenv()

client = pymongo.MongoClient(os.getenv('MONGO_DB_CONNECTION_URL'))
db = client['test']
collection = db['campspots']
requesting = []

with open('output.json', 'r') as camping_data:
    fileData = camping_data.read()
    data_set = json.loads(fileData)
    requesting.append(data_set)

collection.insert_many(data_set)
