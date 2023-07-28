const router = require('express').Router()

router.get('/cars/all',(req,res)=>{
    res.send('all cars')
})


module.exports = router