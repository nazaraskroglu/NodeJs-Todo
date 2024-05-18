const express = require("express")
const app = express()
//env deki port numarasını görebilmesi için dotenv ekledik
require("dotenv").config(); 
//veritabanı bağlantısı
require("./src/config/databaseConnection")
const port = process.env.port || 5001
const todoRouter = require("./src/routers/todoRouter")

//requestlerin bodysini okuyabilmek için ara katman eklemek gerekiyor.
app.use(express.json())

// route urli için kısayol:
app.use("/api", todoRouter)

app.get("/", (req,res)=>{
    res.send("Hoşgeldiniz..")
})

//sunucuyu başlatma işlemi:
app.listen(port, ()=>{
    console.log(`Server ${port} Portundan başlatıldı...`)
})