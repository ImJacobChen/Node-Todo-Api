const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('ID here')
        },
        {
            $set: {
                completed: true
            }
        }, 
        {
            returnOriginal: false
        }
    ).then((res) => {
        console.log(res);
    });

    // db.close();
});