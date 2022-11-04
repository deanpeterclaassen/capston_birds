
const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports={
    seed: (req,res)=>{
        sequelize.query(`
        drop table if exists birdList;

        create table birdList (
            bird_id SERIAL PRIMARY KEY,
            bird_name varchar(100) UNIQUE NOT NULL,
            bird_seen boolean,
            UNIQUE (bird_name)
        );
        `)
        .then(() => {
            console.log('seeded')
            res.sendStatus(200)
        }).catch(err => console.log('error when seeding', err))}
}
