const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/test1", (err, db) => {
  if (err) {
    console.log("unable to connect");
  }

  console.log("connected");

  db.collection("users")
    .findOneAndUpdate(
      {
        name: "sambhav"
      },
      {
        $set: {
          name: "aman"
        }
      },
      { returnOrignal: false }
    )
    .then(result => {
      console.log(result);
    });
});
