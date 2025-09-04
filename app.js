const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const notebookRoutes = require("./routes/routes")
const userRoutes = require("./routes/userRoutes")


app.use("/api/notebooks", notebookRoutes);
app.use("/api/notebooks/user", userRoutes);

app.use((req,res,next)=>{
res.status(404).json({ error: "Route not found" });
})
app.listen(3000, async ()=>{
     await mongoose.connect('mongodb://127.0.0.1:27017/notebook');
    console.log("listening to 3000")
})