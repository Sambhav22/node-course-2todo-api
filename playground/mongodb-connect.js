const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("unable to connect to database server");
  }
  console.log("Connected to our server");

  //db.collection("Todos").insertOne(
  //{
  //text: "something to do",
  //completed: false
  //},
  //(err, result) => {
  // if (err) {
  // return console.log("unable to insert todo");
  //}
  //console.log(JSON.stringify(result.ops, undefined, 2));
  //}
  //);
  db.collection("Users").insertOne(
    {
      name: "sambhav",
      age: 25,
      location: "india"
    },
    (err, result) => {
      if (err) {
        return console.log("unale to insert user", err);
      }
      console.log(result.ops);
    }
  );

  db.close();
});
