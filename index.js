const Sequelize = require('sequelize')

const app = require('express')();

const db = new Sequelize('postgres://abhishek:abhishek@srv1.cb.lk:5432/testdb',{
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

const notification = db.define('notification',{
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
    },
    name: Sequelize.STRING
})

const user = db.define('user',{
     id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
       },
        uname: Sequelize.STRING
})

const userNF = db.define('un',{
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
})

user.belongsToMany(notification, {through: userNF })

db.sync({force: true}).then(el=>{
console.log('Synced')
return user.create({ id: 1,uname: 'abhishek'}).then(u=>{
    return notification.create({id:1,name:'cfgvhjk'}).then(n=>{
                u.setNotifications(n)
        })
    })
}).then( _ => {
 return user.create({id : -1, uname: 'all'})
}).then( u => {
 user.findById({
    where:
})
})

app.get('/',(req,res)=>{
    res.send('OK')
})

app.listen('8080',function() {
    console.log('Listeing on 8080');
})


