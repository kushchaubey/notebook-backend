const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const notebookRoutes = require("./routes/routes")

app.use("/api/notebooks", notebookRoutes);

app.use((req,res,next)=>{
res.status(404).json({ error: "Route not found" });
})
app.listen(3000,()=>{
    console.log("listening to 3000")
})