const MongoClient = require("mongodb").MongoClient;

const DB = MongoClient.connect(
  "mongodb+srv://public:public@cluster0-c6p6b.mongodb.net/admin",
  { useNewUrlParser: true }
).then(conn => conn.db("db1"));

module.exports = async (req, res) => {
  DB.then(db =>
    db
      .collection("posts")
      .find({})
      .toArray()
  )
    .then(posts => res.end(JSON.stringify(posts)))
    .catch(err => {
      res.end(JSON.stringify(err));
      throw err;
    });
};
