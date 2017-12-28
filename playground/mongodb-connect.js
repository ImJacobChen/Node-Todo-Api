const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Failed to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jacob',
    //     age: 24,
    //     location: 'London'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Failed to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collections('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    });

    db.collections('Users').find({name: 'Jacob'}).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log(err);
    });
});