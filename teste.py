import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/test")

mydb = myclient["people"]
print(mydb)