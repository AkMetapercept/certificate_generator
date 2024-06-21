const express = require("express");
const User = require("./model/userDetail");
const Certificate =require("./model/certificateDetails")
const Db=require("./db")
const cors = require("cors");
const dotenv=require("dotenv")
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "success" });
                } else {
                    res.json({ status: "Invalid" });
                }
            } else {
                res.json({ status: "No Records" });
            }
        })
        .catch(err => {
            res.status(500).json({ status: "error", message: err.message });
        });
});

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ status: "success", user }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});


app.get('/certificates', async (req, res) => {
    const certificates = await Certificate.find();
    res.json(certificates);
  });
  
  app.post('/certificates', async (req, res) => {
    const certificate = new Certificate(req.body);
    await certificate.save();
    res.json(certificate);
  });
  
//   app.delete('/certificates/:id', async (req, res) => {
//     await Certificate.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Certificate deleted' });
//   });


const port=process.env.PORT ||3000

app.listen(port, () => {
    console.log("server started on port",port);
});

Db();
