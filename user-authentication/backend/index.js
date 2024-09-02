//username: alik990487
//password: ohm4RsifBAvIMlIJ
// mongodb+srv://alik990487:ohm4RsifBAvIMlIJ@users.uqpu0.mongodb.net/ 

PORT = 3000
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"],
    credentials: true, 
}))
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Thers is no home route please refer to /users")
})
app.get("/users", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    // res.send("the quick brown fox jumps over the lazy dog.")
})

app.post("/signup", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            console.log("email exists")
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: error.message })
    }
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user || !(password === user.password)) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id
    UserModel.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id },
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
    ).then(users => res.json(users))
        .catch(err => {
            if(err.code === 11000) {
                return res.status(400).json({message: "Email already taken"})
            }
            res.status(500).json({message: err.message})
        })
})
app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})


mongoose.connect("mongodb+srv://alik990487:ohm4RsifBAvIMlIJ@users.uqpu0.mongodb.net/?retryWrites=true&w=majority&appName=users")
    .then(() => {
        console.log("Contected to db....")
        app.listen(PORT, () => {
            console.log(`The server is runnning at ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })