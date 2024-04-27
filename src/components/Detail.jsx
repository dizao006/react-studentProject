import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeStuListAsync } from "../redux/stuSlice";
function Detail(props) {
  // 获取路由参数
  const { stuList } = useSelector((state) => state.stu);
  let dispath = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();
  const [stuId, setStuId] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    education: "",
    graduationschool: "",
    profession: "",
    profile: "",
  });
  useEffect(() => {
    const curStu = stuList.filter((stu) => stu.id === id);
    setStuId(curStu[0]);
  }, [id, stuList]);
  function deletestuId(id) {
    if (window.confirm("你是否要删除此学生？")) {
      dispath(removeStuListAsync(id));
      navigate("/home", {
        state: {
          alert: "学生删除成功",
          type: "info",
        },
      });
    }
  }

  return (
    <div className="details container">
      <button className="btn btn-default" onClick={() => navigate("/home")}>
        返回
      </button>
      <h1 className="page-header">
        {stuId.name}
        <span className="pull-right">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/edit/${id}`)}
            style={{ marginRight: 10 }}
          >
            修改
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deletestuId(stuId.id)}
          >
            删除
          </button>
        </span>
      </h1>
      {/* 第一组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-phone">电话：{stuId.phone}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-envelope">
            邮箱：{stuId.email}
          </span>
        </li>
      </ul>
      {/* 第二组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-book">
            文化水平：{stuId.education}
          </span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-flag">
            毕业院校：{stuId.graduationschool}
          </span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-briefcase">
            专业：{stuId.profession}
          </span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-user">
            个人简介：{stuId.profile}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Detail;
