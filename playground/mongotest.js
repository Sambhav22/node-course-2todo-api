const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/test", (err, db) => {
  return console.log("server is connected");
});
MongoClient.collection("users").insertOne({}, (err, result));
