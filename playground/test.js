const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/test1", (err, db) => {
  if (err) {
    console.log("unable to connect");
  }

  console.log("connected");

  db.collection("users").insertOne(
    {
      name: "sambhav"
    },
    (err, result) => {
      if (err) {
        return console.log("unale to insert user", err);
      }
      console.log(result.ops);
    }
  );
  db.collection("users").deleteMany({
    name: "sambhav"
  });
});
