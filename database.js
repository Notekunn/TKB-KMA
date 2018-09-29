const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME || 'postgres', process.env.DATABASE_USER || 'postgres', process.env.DATABASE_PASS || 'cuong', {
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,

    define: {
        underscored: false,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: true
    },
    sync: { force: false },


    // SQLite only
    //storage: 'path/to/database.sqlite'
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {

        console.error('Unable to connect to the database:', err.message);
        process.exit(1);
    });
Subject = sequelize.define('subject', {

    lophocphan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hocphan: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: true
    },
    siso: {
        type: Sequelize.INTEGER,
    },
    sodk: {
        type: Sequelize.INTEGER,
    },
    sotc: {
        type: Sequelize.INTEGER,
    },
    giangvien: {
        type: Sequelize.STRING,
    }

})

TimeStudy = sequelize.define('timestudy', {
    hocphan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        unique: false
    },
    start: {
        type: Sequelize.BIGINT
    },
    end: {
        type: Sequelize.BIGINT
    },
    date: {
        type: Sequelize.INTEGER,
    },
    tiet: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.ENUM,
        values: ['LT', 'TH']
    }
})

Place = sequelize.define('place', {
    code: {
        type: Sequelize.STRING,
        unique: false
    },
    place: {
        type: Sequelize.STRING
    }
})




Promise.all([
    Subject.sync({ force: false }),
    TimeStudy.sync({ force: false }),
    Place.sync({ force: false })])


module.exports = {
    Subject,
    TimeStudy,
    Place
}
