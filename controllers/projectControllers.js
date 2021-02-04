const Project = require ("../models/project")

const getAllProjectsController = (req, res) => {

    Project.find()
        .then((data) => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
};

const getOneProjectController = (req, res) => {
    const project = req.params;

    Project.findOne({ _id:project.id }, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send(data);
    })

};

const createOneProjectController = (req, res) => {

    Project.create({ 
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        img_url:req.body.img_url,
        source_url:req.body.source_url,
        live_url:req.body.live_url,
        video_url:req.body.video_url
     }, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send(data);
    })
    
};

const updateOneProjectController = (req, res) => {
    const project = req.params;

    Project.findOneAndUpdate(
    {_id:project.id},
    { $set : {
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        img_url:req.body.img_url,
        source_url:req.body.source_url,
        live_url:req.body.live_url,
        video_url:req.body.video_url,
        updatedAt:Date.now()
     }}, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send("Project is updated");
    })
    
};

const deleteOneProjectController = (req, res) => {

    const project = req.params;

    Project.deleteOne({_id:project.id}, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(400);
        } 
        console.log(data);
        res.status(200).send("Project is deleted");
    })

}
    

module.exports = { getAllProjectsController, getOneProjectController, createOneProjectController, updateOneProjectController, deleteOneProjectController}