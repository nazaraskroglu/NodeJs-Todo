const todo = require("../models/todoModel")
//create
const todoAdd= async(req, res) =>{
    try{
      const _todo= await todo.findOne({name: req.body.name}) 

      if(_todo) {
        return res.status({
            success: false,
            message: "Bu isimde zaten bir kullanıcı var!!"
        })
      }

      const todoAdd = new todo(req.body)
      await todoAdd.save()
        .then(()=>{
            return res.status(201).json(todoAdd)
        })
        .catch((err)=>{
            return res.status(400).json({
                success:false,
                message: "kayıtta hata olustu:" + err
            })
        })

    } catch(error){
        return res.status(500).json({
            success:false,
            message:"sunucu hatası" + error
        })
    }
}

//get all
const todoGetAll = async(req,res) =>{
   // çok verili sistemler için sayfalama ile veri çeker.
   const { page } =req.query  
   const limit = 2
   const skip = Number(page - 1) * limit
    try{
        const todoGetAll = await todo.find({}).limit(limit).skip(skip)
    
        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
        
      } catch(error){
          return res.status(500).json({
              success:false,
              message:"Kayıtlar getirilemedi" + error
          })
      }
}

//update
const todoUpdate= async(req, res) =>{
    const { id } = req.params
    try{
      const todoUpdate= await todo.findByIdAndUpdate(id, req.body) 
      if (todoUpdate){
        return res.status(200).json({
            success:true,
            message:"Güncelleme Başarılı"
        })
      }else return req.status(400).json({
        success:false,
        message:"Güncelleme başarısız!" + error
      })
    
    } catch(error){
        return res.status(500).json({
            success:false,
            message:"Hata!" + error
        })
    }
}

//delete
const todoDelete= async(req, res) =>{
    const { id } = req.params
    try{
      const todoDelete= await todo.findByIdAndDelete(id, req.body) 
      if (todoDelete){
        return res.status(200).json({
            success:true,
            message:"Silme işlemi Başarılı"
        })
      }else return req.status(400).json({
        success:false,
        message:"Silme işlemi başarısız!" + error
      })
    
    } catch(error){
        return res.status(500).json({
            success:false,
            message:"Hata!" + error
        })
    }
}

//detail
const todoGet = async(req,res) =>{
    const { id } = req.params
    try{
        const todoGet = await todo.findById(id)
    
        return res.status(200).json({
            success: true,
            data: todoGet
        })
        
      } catch(error){
          return res.status(500).json({
              success:false,
              message:"Kayıtlar getirilemedi" + error
          })
      }
}

//birden fazla dosyayı dışarı açacağımız için obje olarak yazdık.
module.exports = {
    todoAdd,
    todoGetAll,
    todoUpdate,
    todoDelete,
    todoGet
}