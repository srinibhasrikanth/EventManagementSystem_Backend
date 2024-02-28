const express=require('express')
const { createCore, createVolunteer, getAllVolunteer, getAllCore } = require('../controllers/volunteerController')
const router=express.Router()

router.post('/create-core',createCore)

router.get('/core-list',getAllCore)

router.post('/create-volunteer',createVolunteer)

router.get('/volunteer-list',getAllVolunteer)

module.exports=router;