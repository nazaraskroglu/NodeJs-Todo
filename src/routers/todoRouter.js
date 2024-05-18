const router = require("express").Router()
const todoController = require("../controllers/todoController")

router.post("/todo", todoController.todoAdd)
router.get("/getAll", todoController.todoGetAll)
router.put("/todo/:id", todoController.todoUpdate)
router.delete("/delete/:id", todoController.todoDelete)
router.get("/get/:id", todoController.todoGet)



//route u dışarıya açma
module.exports = router
