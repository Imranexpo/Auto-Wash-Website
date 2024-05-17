// our dependencies 
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// let us run the server.so its running,
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});

//let us create our database(mysql)
const db =mysql.createConnection({
    host:'localhost',
    post:3306,//specify the port here
    user:'root',
    password:'Imran123',
    database:'car_website',
})

//let us now create a route to the server that will register a user.

app.post('/register', (req, res)=>{
    //we need to get variables sent from the form
    const sentEmail =req.body.Email
    const sentUserName =req.body.UserName
    const sentPassword =req.body.Password

    //lets create sql statement to insert the user to the database table user
    const SQL = 'INSERT INTO user(email, username, password) VALUES(?,?,?)'//we are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]

    //query to execute the  sql statement stated above
    db.query(SQL, Values,(err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message:'user added'})
            //let try and see
            //user has not been submitted, we need to use Express and cors
            //successful
        }
    })
})

//Now we need to login with these credentiels from a regitered user
//lets create another route 
app.post('/login',(req, res)=>{
    //we nee to get variables sent from the form
    const sendloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword

    //lets create sql statement to insert the user to the database table user
    const SQL = 'SELECT*FROM user WHERE username =? && password =?'
    //we are going to enter these values through a variable
    const Values = [sendloginUserName, sentloginPassword]

    //query to execute the sql statement started above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials Don't match!`})
            //this should be good, lets try to login.
        }
    })
})
app.post('/Booking', (req, res)=>{
    //we need to get variables sent from the form
    const sentFullName =req.body.FullName
    const sentPhoneNo =req.body.PhoneNo
    const sentWashDate =req.body.WashDate
    const sentWashTime =req.body.WashTime
    const sentPackage =req.body.Package
    const sentWashPoint =req.body.WashPoint
    const sentMessage =req.body.Message
     
   //lets create sql statement to insert the booking to the database table booking
   const SQL ='INSERT INTO booking(FullName, PhoneNo, WashDate, WashTime, Package, WashPoint, Message) VALUES(?,?,?,?,?,?,?)'//we ere going to enter these values through a variable
   const Values = [sentFullName, sentPhoneNo, sentWashDate, sentWashTime, sentPackage, sentWashPoint, sentMessage] 

   //query to execute the sql statement statedabove
   db.query(SQL, Values,(err, results)=>{
    if(err){
        res.send(err)
    }
    else{
        console.log('Booking inserted is successfully!')
        res.send({message:'booking added'})
        //let try and see
        //booking has been submitted , we need to use express and cors
        //successfull
    }
        
   })
})

// Add this endpoint to your Express server code
app.get('/Booking', (req, res) => {
    // SQL query to retrieve all bookings from the database
    const SQL = 'SELECT * FROM booking';
    
    // Execute the query
    db.query(SQL, (err, results) => {
        if (err) {
            res.status(500).send(err); // Internal Server Error if query fails
        } else {
            res.status(200).send(results); // Send booking data if successful
        }
    });
});
// Add this endpoint to your Express server code
app.delete('/booking/:id', (req, res) => {
    const bookingId = req.params.id;

    // SQL query to delete the booking with the specified ID from the database
    const SQL = 'DELETE FROM booking WHERE id = ?';

    // Execute the query
    db.query(SQL, [bookingId], (err, result) => {
        if (err) {
            res.status(500).send(err); // Internal Server Error if query fails
        } else {
            res.status(200).send({ message: 'Booking deleted successfully' }); // Send success message
        }
    });
});



