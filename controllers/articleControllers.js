const Article = require("../models/article")

const getAllArticlesController = (req, res) => {

    Article.find()
        .then((data) => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    };

const getOneArticleController = (req, res) => {
    const article = req.params;

    Article.findOne({ _id:article.id }, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send(data);
    })

};

const createOneArticleController = (req, res) => {

    Article.create({ 
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image,
        medium_url:req.body.medium_url
        }, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send(data);
    })
    
};

const updateOneArticleController = (req, res) => {
    const article = req.params;

    Article.findOneAndUpdate(
    {_id:article.id},
    { $set : {
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image,
        medium_url:req.body.medium_url,
        updatedAt:Date.now()
        }}, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send("Article is updated");
    })
    
};

const deleteOneArticleController = (req, res) => {

    const article = req.params;

    Article.deleteOne({_id:article.id}, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send("Article is deleted");
    })

}
        

    module.exports = { getAllArticlesController, getOneArticleController, createOneArticleController, updateOneArticleController, deleteOneArticleController}