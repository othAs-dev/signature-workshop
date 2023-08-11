const db = require('../model/index')

exports.studentLogin = (username, password) => {
  return getAuth(username, password)
  .then(res => res[0].getStudent())
  .then(userData => ({firstname: userData.firstname, lastname: userData.lastname, role: 'student'}));
}

exports.intervenantLogin = (username, password) => {
  return getAuth(username, password)
  .then(res => res[0].getIntervenant())
  .then(userData => ({firstname: userData.firstname, lastname: userData.lastname, role: 'intervenant'}))
}

function getAuth(username, password) {
  return db.Auth.findAll({where: {username, password}})
}