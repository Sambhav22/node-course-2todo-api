 const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    console.log("unable to connect");
  }

  console.log("connected");

  db.collection("Todos")
    .find()
    .count()
    .then(
      count => {
        console.log(`${count}`);
      },

      err => {
        console.log("unable to fetch todo");
      }
    );
});
