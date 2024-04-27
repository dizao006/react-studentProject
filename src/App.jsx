import { NavLink } from "react-router-dom";
import RouteConfig from "./route/route";
import "./css/App.css";

function App() {
  return (
    <div id="app" className="container">
      <nav className="navbar navbar-inverse navbar-fixed-top ">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              管理系统
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home" className="navigation">
                  主页
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navigation">
                  关于
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/add" className="navigation">
                  添加用户
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 匹配的路由对应组件的显示 */}
      <div className="content">
        {/* <Routes>
     
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Add />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes> */}
        <RouteConfig></RouteConfig>
      </div>
    </div>
  );
}

export default App;
