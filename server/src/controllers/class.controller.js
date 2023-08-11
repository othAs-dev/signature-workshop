const { Router } = require("express");
const classService = require("../services/class.service.js");

module.exports = function () {
  const router = Router();

  router.get("/all", async (req, res) => {
    const classes = await classService.findAll();
    res.send(classes);
    console.log(classes);
  });

  router.get("/get/:id", async (req, res) => {
    res.send(await classService.find(req.params.id));
  });

  router.put("/update/:id", async (req, res) => {
    const {id, name, startDate, endDate, level} = req.body
    const newClass = await classService.update({
      id,
      name,
      startDate,
      endDate,
      level,
    });
    res.send(newClass);
  });

  router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await classService.destroy(id);
    const classes = await classService.findAll();
    res.send(classes);
  });

  router.post("/create", async (req, res) => {
    const {name, startDate, endDate, level} = req.body;
    const newClass = await classService.createClass({
      name,
      startDate,
      endDate,
      level,
    });
    res.send(newClass);
  });

  return router;
};
