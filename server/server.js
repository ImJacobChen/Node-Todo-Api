var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jacobchen17:securepassword@cluster0-shard-00-00-qy9zz.mongodb.net:27017,cluster0-shard-00-01-qy9zz.mongodb.net:27017,cluster0-shard-00-02-qy9zz.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    }
});

var user = new User({
    email: 'Jacob@example.com'
});

user.save().then((res) => {
    console.log('User saved');
}).catch((err) => {
    console.log(err);
});