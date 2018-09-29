const { Subject, TimeStudy, Place } = require('./database');
const Sequelize = require('sequelize');
const { lte, gte} = Sequelize.Op;

let timenow = new Date();
console.log(timenow.getDay() + 1)
TimeStudy.findAll({
    where: {
        start: {

            [lte]: Math.floor(timenow.getTime() / 1000)
        },
        end: {
            [gte]: Math.floor(timenow.getTime() / 1000)
        },
        date: 6
    }
}).then(e => console.log(e.map(e => e.get({ plain: true }))))
