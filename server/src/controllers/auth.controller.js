const { Router } = require("express");
const { studentLogin, intervenantLogin } = require("../services/auth.service");

module.exports = function(){
  const router = Router();

  router.post('/student/login', async (req, res) => {
    const {username, password} = req.body;
    const userData = await studentLogin(username, password)
    res.send(userData);
  })

  router.post('/intervenant/login', async (req, res) => {
    const {username, password} = req.body;
    const userData = await intervenantLogin(username, password)
    res.send(userData);
  })
  return router;
}