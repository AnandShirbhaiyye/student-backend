const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();

app.use(express.json());

const  PORT = 5000;

mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gfb4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('connected to database...!');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});



// app.get('/api', (req, res) => {
//     res.send([1, 2, 3]);
// });

app.post('/add/student', (req, res) => {
    const student = {
        name: req.body.name,
        age: req.body.age,
        roll: req.body.roll
    }
    const newStudent = new Student(student);
    newStudent.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

// app.post('/subject', (req, res) => {
//     console.log(req.body);
//     res.send({
//         status:"success",
//     })
// });


app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
});