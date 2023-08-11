const  {students, intervenant, admin, studentsAuth, intervenantAuth} = require('../data/userData');
async function mock( db ){
  
  const studentsModel = students.map(async (el,index) => {
    const student = await db.Student.create(el);
    await student.createAuth(studentsAuth[index])
    return student;
  })
  const intervenantModel = intervenant.map(async (el,index) => {
    const intervenant = await db.Intervenant.create(el);
    await intervenant.createAuth(intervenantAuth[index])
    return intervenant;
  })

  const classModel = await db.Class.create({name: 'math',level: 'm1', startDate: new Date(), endDate: new Date(), })
  studentsModel.map(async (el) => await classModel.addStudent(await el))
  intervenantModel.map(async (el) => await classModel.setIntervenant(await el))  
}

module.exports = mock;
