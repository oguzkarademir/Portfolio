const express=require("express")
const { getAllArticlesController, getOneArticleController, createOneArticleController, updateOneArticleController, deleteOneArticleController } = require("../controllers/articleControllers")

const router = express.Router();

router.get("/articles", getAllArticlesController)
router.get("/articles/:id", getOneArticleController)
router.post("/articles", createOneArticleController)
router.put("/articles/:id", updateOneArticleController)
router.delete("/articles/:id", deleteOneArticleController)

module.exports = router;


