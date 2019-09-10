// CRUD create read update delete
// http://mongodb.github.io/node-mongodb-native/3.2/api/Collection.html#insertOne

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb'); //node.js driver to connect to mongodb database

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// mongodb does all this for us automatically
const id = new ObjectID(); //constructor function
//mongodb ids have an embedded timestamp
// const id = new ObjectID();
// console.log(id); //object id. 12 byte. first 4 - unix epoch seconds
// // then 5 byte random val, then 3 byte counter starting with random
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);


//callback runs after connect operation is complete
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to db')
  } 
  console.log('connected to db correctly');

  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   //_id: id, //optional, must be an ObjectID, mongo calcs new by default
  //   name: 'tim',
  //   age: 31
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('unable to insert user')
  //   }
  //   console.log(result.ops) //returns the info that was saved
  //   console.log(result.ops[0]._id);
  // })
  

//   db.collection('users').insertMany([
//     {
//       name: 'karen',
//       spirit: 'turtle'
//     },
//     {
//       name: 'tim',
//       spirit: 'lizard'
//     }
//   ], (error, result) => {
//     if (error) {
//       return console.log('unable to insert documents');
//     }
//     console.log(result.ops);
//   })
// })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'eat dinner',
  //     completed: false
  //   },
  //   {
  //     description: 'part 1 node tut',
  //     completed: true
  //   },
  //   {
  //     description: 'standford pos in german',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('failed to upload tasks')
  //   }
  //   console.log(result.ops)
  // })


  // QUERYING

    // db.collection('users').findOne({ name: 'tim'}, (error, user) => {
  //   if (error) {
  //     return console.log('unable to fetch');
  //   }
  //   console.log(user);
  // })

    // returns a cursor (pointer to data in db)
    // db.collection('users').find({ name: 'tim'}).toArray((error, users) => {
    //   console.log(users);
    // })
  
    // // the returned cursor allows us to use other methods, like count.
    // // this allows processing on server, so it sends a single integer (fast) rather than all records to be processed on frontend. slow
    // db.collection('users').find({ name: 'tim'}).count((error, count) => {
    //   console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5d519b7fff5583379a1cb2c9")}, (error, user) => {
    //   if (error) {
    //     return console.log('coud not retrieve task');
    //   }
    //   console.log(user);
    // })
  
    // db.collection('tasks').find({ completed: false}).toArray((error, count) => {
    //   console.log(count);
    // })

    // UPDATE
    // db.collection('tasks').updateOne({ 
    //   _id: new ObjectID("5d519b7fff5583379a1cb2c9") 
    // }, { 
    //   $set: {
    //     completed: false
    //   }
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log(err);
    // })

    // db.collection('tasks').updateMany({
    //   completed: false
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }).then(res => console.log(res.modifiedCount))
    // .catch(err => console.log(err))

      // DELETE
  // db.collection('users').deleteMany({
  //   age: 31,
  //   name: 'tim'
  // }).then(result => {
  //   console.log(result);
  // }).catch(err => console.log(err))

  // will delete the first match
  // db.collection('users').deleteOne({
  //   name: 'Tim',
  //   age: 31
  // }).then(result => {
  //   console.log(result);
  // }).catch(err => console.log(err))

})

//node mongodb.js
// picking a name and accessing it, mongodb will automatically create the db for us

// use id to access documents for editing
// we can generate ids for documents before they are ever inserted to db



// MONGOOSE
// npm module for mongodb
// validation for documents
// authentication

// ODM - object document mapper


// HTTP ENDPOINTS
// REST API 
// - Representational State Transfer 
// - Application Programming Interface
// provides a set of tools allowing others to build out an app with this db
// REST API allows others to access and manipulate resources 
//using a predefined set of operations

// Create - POST /tasks

// Read - GET /tasks
//      - GET /tasks/:id

// Update - PATCH /tasks/:id (toggle complete)

// DELETE - DELETE /tasks/:id