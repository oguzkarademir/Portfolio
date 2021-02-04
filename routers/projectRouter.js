const express=require("express")
const { getAllProjectsController, getOneProjectController, createOneProjectController, updateOneProjectController, deleteOneProjectController } = require("../controllers/projectControllers")

const router = express.Router();

router.get("/projects", getAllProjectsController)
router.get("/projects/:id", getOneProjectController)
router.post("/projects", createOneProjectController)
router.put("/projects/:id", updateOneProjectController)
router.delete("/projects/:id", deleteOneProjectController)

module.exports = router;