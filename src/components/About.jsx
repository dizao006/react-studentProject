import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

function About(props) {
  let navgite = useNavigate();
  function toEmli() {
    navgite("/about/emil");
  }
  return (
    <div className="about container">
      <h1 className="page-header">使用说明</h1>
      <p>学习reatc-router</p>
      <span onClick={toEmli}>点击进入emil</span>
      <NavLink to="/about/emil">进入emli</NavLink>
      {/* 用于在父组件子路由的展示 */}
      <Outlet></Outlet>
    </div>
  );
}

export default About;
