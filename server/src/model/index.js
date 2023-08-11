const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const {classModel} = require("./class.model.js");
const {authModel} = require("./auth.model.js");
const {studentModel} = require("./auth.model.js");
const {intervenantModel} = require("./auth.model.js");
const {adminModel} = require("./auth.model.js");


const mock = require("../mock/mock.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.sequelize = sequelize;

db.Class = classModel(db);
db.Auth = authModel(db);

db.Student = studentModel(db);
db.Intervenant = intervenantModel(db);
db.Admin = adminModel(db);

db.Student.hasOne(db.Auth)
db.Intervenant.hasOne(db.Auth)
db.Admin.hasOne(db.Auth)

db.Auth.belongsTo(db.Student)
db.Auth.belongsTo(db.Intervenant)
db.Auth.belongsTo(db.Admin)

db.Class.hasMany(db.Student);
db.Class.hasOne(db.Intervenant);

db.Intervenant.belongsTo(db.Class)

module.exports = db;
