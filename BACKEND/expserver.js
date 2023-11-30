const express=require('express')
//const studentdata=require('./studentdata')
const app=express()
app.use(express.json())
// student vale data ko store kraya ha 
let students=[
    {
        "id": "1",
        "name" :"A"
    },{
        "id": "2",
        "name" :"B" 
    },{
        "id": "3",
        "name" :"C" 
    },{
        "id": "4",
        "name" :"D" 
    },{
        "id": "5",
        "name" :"E" 
    },{
        "id": "6",
        "name" :"F" 
    }
]

// get used for read
app.get('/students',(req,res)=>{
    res.json(students)
});

// GET endpoint to retrieve all ids
app.get('/id', (req, res) => {
    var allIds = students.map(student => student.id);
    res.json(allIds);
});

// GET endpoint to retrieve a specific student by id
app.get('/students/:id', (req, res) => {
    const id = req.params.id;

    const student = students.find(student => student.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ success: false, message: 'Student not found' });
    }
});

// GET endpoint to retrieve a specific student by name
app.get('/students/:name', (req, res) => {
    const name = req.params.name;

    const student = students.find(student => student.name === name);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ success: false, message: 'Student not found' });
    }
});


// GET endpoint to retrieve all ids
app.get('/name', (req, res) => {
    var allname = students.map(student => student.name);
    res.json(allname);
});


// post used for create

app.post('/students',(req,res)=>{
    // if(!req.body.id){
    //     res.status(400)
    //    return res.json({error: "id required"})
    // }
    const user={
        //id :students.length+1,
        id:req.body.id,
        name:req.body.name
    }
    students.push(user)
    res.json(user)
})

// put used for update

app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;

    console.log('Received PUT request with id:', id, 'and name:', name);
    console.log('Original students:', students);

    const updatedStudents = students.map(student => {
        if (student.id === id) {
            return { ...student, name: name };
        }
        return student;
    });

    console.log('Updated students:', updatedStudents);

    students = updatedStudents;

    console.log('Final students:', students);

    res.json({
        success: true,
        message: "Updation completed"
    });
});

app.delete('/students/:id', (req, res) => {
    var id = req.params.id;
    // Using filter to create a new array without the element with the specified id
    var newStudents = students.filter((student) => {
        return student.id != id;
    });

    // Check if any student was removed
    if (newStudents.length < students.length) {
        students = newStudents;
        res.json({ success: true, message: 'Student deleted successfully' });
    } else {
        console.log("Student not found.");
        res.status(404).json({ success: false, message: 'Student not found' });
    }
});

app.listen(3000, (req,res) => console.log(
    "http://localhost:3000"
))