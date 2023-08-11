const db = require("../model/index.js");
const Class = db.Class;

exports.createClass = async ({ name, startDate, endDate, level }) => {
  Class.create({
    name, startDate, endDate, level,
  });
};
exports.destroy = async (id) => {
  return await Class.destroy({ where: { id: id } });
};

exports.update = async ({ name, startDate, endDate, id, level }) => {
  await Class.update(
    { name, startDate, endDate, level },
    { where: { id: id } }
  );
  return await Class.findAll({ where: { id: id } });
};

exports.findAll = async () => {
  return await Class.findAll();
};

exports.find = async (id) => {
  return await Class.findAll({ where: { id } });
};
