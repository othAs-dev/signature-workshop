import React, { useEffect, useState } from "react";
import "../../index.css";
import Logo from "../../assets/logo.svg";
import Wall from "../../assets/wallpaper.jpg";
import "./Login.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";
import { Route, useNavigate } from "react-router-dom";
import { Field, useFormik } from 'formik';


function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [authContext, setAuthContext] = useState('student');
  useEffect(() => {
    if (auth.user) {
      navigate("/class", { replace: true });
    }
  }, [auth.user]);


  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: v => doLogin(v)
  })

  const doLogin = ({ username, password }) => {
    auth.login(username, password, authContext)
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${Wall})` }}
    >
      <div className="flex flex-col drop-shadow-xl bg-white rounded-md box-border w-11/12 gap-10 tablet:w-9/12 laptop:w-7/12 desktop:w-5/12 desktop:gap-20">
        <div className="flex flex-col items-center gap-3 pt-12">
          <img width="80px" src={Logo} alt="log-img" />
          <h1 className="text-2xl">Connectez-vous</h1>
        </div>
        <div className="flex flex-col pb-12 pl-8 pr-8 gap-5">
          <div onKeyDown={(e) => {
            if (e.key === "Enter") {
              formik.handleSubmit()
            }
          }} className="flex flex-col gap-5">
            <Input
              value={formik.values.username}
              onChange={formik.handleChange}
              type={"username"}
              id={"username"}
              placeholder={"Entrez votre username"}
              label={"username"}
            />
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              type={"password"}
              id={"password"}
              label={"password"}
            />
            <div className="flex flex-col gap-2" >
              <label className="flex gap-2 cursor-pointer" htmlFor="studentRadio">
                <input
                  type={'radio'}
                  id={'studentRadio'}
                  name={'state'}
                  value={'student'}
                  checked={authContext === 'student'}
                  onChange={(e) => setAuthContext(e.target.value)}
                />
                Student
              </label>

              <label className="flex gap-2 cursor-pointer" htmlFor="intervenantRadio">
                <input
                  type={'radio'}
                  id={'intervenantRadio'}
                  name={'state'}
                  value={'intervenant'}
                  checked={authContext === 'intervenant'}
                  onChange={(e) => setAuthContext(e.target.value)}
                />
                Intervenant
              </label>
            </div>
          </div>
          <Button
            name={"Connexion"}
            callback={formik.handleSubmit}
            color={"primary"}
          />
          <div className="flex flex-row pt-6 justify-between gap-2">
            <div>
              <input
                type="checkbox"
                value="false"
                name="checkbox"
                className="mr-2"
              />
              <span className="text-base">Remember me</span>
            </div>
            <div>
              <span>
                <a href="#" className="text-blue-600 text-base">
                  Forgot Password ?
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
