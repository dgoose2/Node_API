import json


with open('camping-spots.json', 'r') as camping_data:
    fileData = camping_data.read()
    data_set = json.loads(fileData)

final_data = []

for i in range(len(data_set)):
    internalData = {}
    internalData['name'] = data_set[i]['name']
    internalData['rating'] = data_set[i]['rating']
    internalData['categories'] = data_set[i]['categories']
    internalData['website'] = data_set[i]['business_url']

    final_data.append(internalData)

with open("output.json", "w") as outputFile:
    json.dump(final_data, outputFile, indent=4)

print('process complete')
