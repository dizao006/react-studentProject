import { getStuListApi } from "../Api/stuApi";
import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import { useLocation, NavLink } from "react-router-dom";

function Home(props) {
  const [stuList, setStuList] = useState([]);
  const [serchList, setSerchList] = useState([]);
  const [serach, setSerach] = useState("");
  const [state, setState] = useState({});
  // 获取路由参数
  let location = useLocation();
  useEffect(() => {
    setState(location.state);
  }, [location]);

  useEffect(() => {
    getStuListApi().then((e) => {
      setStuList(e.data);
    });
  }, []);
  function changeHeld(e) {
    setSerach(e.target.value);
    let serchList = stuList.filter((s) => {
      return s.name.includes(e.target.value);
    });
    setSerchList(serchList);
  }
  let list = serach ? serchList : stuList;
  let trs = list.map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>
          <NavLink to={`/detail/${e.id}`}>详细</NavLink>
        </td>
      </tr>
    );
  });
  const Alert2 = state ? <Alert {...state} /> : null;
  return (
    <div>
      <h1>学生列表</h1>
      {Alert2}
      <input
        type="text"
        placeholder="搜索"
        className="form-control"
        value={serach}
        onChange={(e) => changeHeld(e)}
      />
      <br></br>
      {/* 表格 */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>邮箱</th>
            <th>电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </div>
  );
}

export default Home;
