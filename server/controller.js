const path = require('path')
require('dotenv').config()
const {DATA_BASE_URL} = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(DATA_BASE_URL, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports={
    addBird: (req,res)=>{
        const{name} = req.body;
        sequelize.query(`insert into birdList(bird_name,bird_seen)
        values('${name}',true)
        ON CONFLICT (bird_name)
        DO NOTHING;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    getBirds: (req,res)=>{
        sequelize.query   (`select * from birdList;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    addList: (req,res)=>{
        const

    }
}