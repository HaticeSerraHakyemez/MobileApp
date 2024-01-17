const express = require('express')
const router = express.Router()
const admins = require('../models/admin')
const users = require('../models/user')
const availableSlots = require('../models/availableslots')
const occupiedSlots = require('../models/occupiedslots')


router.delete('/removeSlot', async (req, res) => {
  await availableSlots.find({username:req.query.username,day:req.query.day,slot:req.query.slot}).deleteOne().then(async ()=>{
        if((await occupiedSlots.find({trainer:req.query.username,day:req.query.day,slot:req.query.slot})).length==0){
          res.status(200).json("Removed")
        }
        else{
          res.status(401).json("Warning!")
        }
      }
  ).catch(error=>{
    res.status(500).json("error")
  })
})

router.get('/myAppointments', async (req, res) => {
  await occupiedSlots.find({customer:req.query.customer,day:req.query.day}).sort({ slot : 1 }).then(slot=>{
    if(slot){
      res.status(200).json(slot)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.get('/getAdmin', async (req, res) => {
  await admins.find({username:req.query.username}).then(admin=>{
    if(admin){
      res.status(200).json(admin)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.get('/getUser', async (req, res) => {
  await users.find({username:req.query.username}).then(user=>{
    if(user){
      res.status(200).json(user)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.get('/myClients', async (req, res) => {
  await occupiedSlots.find({trainer:req.query.trainer,day:req.query.day}).sort({ slot : 1 }).then(slots=>{
    if(slots){
      res.status(200).json(slots)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.post('/getAppointment', async (req, res) => {
  if((await occupiedSlots.find({customer:req.body.customer,day:req.body.day,slot:req.body.slot})).length==0){
    const occupiedSlot = new occupiedSlots({
      trainer: req.body.trainer,
      customer: req.body.customer,
      day: req.body.day,
      slot: req.body.slot})
    await occupiedSlot.save().then(occupiedSlot=>{
      if(occupiedSlot){
        res.status(200).json(occupiedSlot)
      }
      else{
        res.status(401).json("Warning!")
      }
    }).catch(error=>{
      res.status(500).json("error")
    })
  }
 else{
  res.status(500).json("error")
 }
})

router.get('/trainerSlots', async (req, res) => {
  await availableSlots.find({username:req.query.trainer,day:req.query.day}).sort({ slot : 1 }).then(async slots=>{
    if(slots){
      let temp=[]
      let f=0
      for(let i=0;i<slots.length;i++){
        if((await occupiedSlots.find({trainer:req.query.trainer,day:req.query.day,slot:slots[i].slot})).length==0){

          temp[f]=slots[i]
          f++
        }
      }
      res.status(200).json(temp)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.get('/trainers', async (req, res) => {
  await admins.find().then(admin=>{
    if(admin){
      res.status(200).json(admin)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.post('/getSlot', async (req, res) => {
  const availableSlot = new availableSlots({
    username: req.body.username,
    day: req.body.day,
    slot: req.body.slot})
  await availableSlot.save().then(availableSlot=>{
    if(availableSlot){
      res.status(200).json(availableSlot)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.post('/setSlot', async (req, res) => {
  const slot=await availableSlots.find({username: req.body.username,day:req.body.day, slot: req.body.slot})
  if(slot.length==0){
    const availableSlot = new availableSlots({
      username: req.body.username,
      day: req.body.day,
      slot: req.body.slot})
  await availableSlot.save().then(availableSlot=>{
    if(availableSlot){
      res.status(200).json(availableSlot)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
}
else{res.json("Already exists.")}
})
 
router.get('/admin', async (req, res) => {
  await admins.findOne({username:req.query.username,password:req.query.password}).then(admin=>{
    if(admin){
      res.status(200).json(admin)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

 
router.get('/user', async (req, res) => {
  await users.findOne({username:req.query.username,password:req.query.password}).then(user=>{
    if(user){
      res.status(200).json(user)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

router.post('/signUp', async (req, res) => {
  const user = new users({
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    password: req.body.password})
  await user.save().then(user=>{
    if(user){
      res.status(200).json(user)
    }
    else{
      res.status(401).json("Warning!")
    }
  }).catch(error=>{
    res.status(500).json("error")
  })
})

module.exports = router
