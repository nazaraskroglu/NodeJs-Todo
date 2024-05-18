//VERİTABANI BAĞLANTISI
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Todo", {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})

.then(()=>{
    console.log("veritabanına başarıyla bağlandı");
})
.catch((err)=>{
    console.log("Veri tabanına bağlanamadı" + err)
})