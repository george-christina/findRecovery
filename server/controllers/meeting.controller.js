const Meeting = require("../models/meeting.model");

module.exports = {
    index: (req,res) => {
        Meeting.find()
                .then(data => res.json({results:data}))
                .catch(err => res.status(400).json({errors:err.errors}))
    },
    create: (req,res) => {
        Meeting.create(req.body)
                .then(data => res.json({results:data}))
                // .then(data => console.log('hello'))
                .catch(err => res.status(400).json({errors:err.errors}))
    },
    show: (req,res) => {
        Meeting.find({_id:req.params.id})
                .then(data => res.json({results:data}))
                .catch(err => res.status(400).json({errors:err.errors}))
    },
    update: (req,res) => {
        Meeting.updateOne({_id:req.params.id},req.body,{runValidators:true, new:true})
                .then(data => res.json(data))
                .catch(err => res.status(400).json({errors:err.errors}))
    },
    destroy: (req,res) => {
        Meeting.deleteOne({_id:req.params.id})
                .then(data => res.redirect(303,'/api/meetings'))
                .catch(err => res.status(400).json({errors:err.errors}))
    }
}


