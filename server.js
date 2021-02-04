const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require("dotenv").config();
const connectDatabase=require("./utils/connectDatabase");
const app = express();
const projectRouter = require("./routers/projectRouter")
const articleRouter = require("./routers/articleRouter")

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

///Mongo Db
connectDatabase()

// dotenv.config({
//     path:".env"
// })

// production
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
    })
}


app.use("/api", projectRouter);
app.use("/api", articleRouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log( `Server started on http://localhost:${process.env.PORT || 5000}`)
})