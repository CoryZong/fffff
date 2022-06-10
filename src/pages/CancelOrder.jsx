import React, { useEffect, useState } from "react";
import { Switch, Button } from "antd-mobile";
import Axios from "axios";
import CheckDelete from "../Components/CheckDelete";
import CheckUpdate from "../components/CheckUpdate";
import CheckEdit from "../components/CheckEdit";
import Nav from "../components/Nav";

const CancelOrder = () => {
  const [Items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => getData, []);

  function getData() {
    Axios.get("http://localhost:3000/reason")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.log(error));
  }

  //Yes
  function YesHandler() {
    if (show) {
      setShow((pre) => !pre);
    }
  }

  //NO => 關閉視窗
  function NoHandler() {
    if (show) {
      setShow((pre) => !pre);
    }
    if (showUpdate) {
      setShowUpdate((pre) => !pre);
    }
    if (showEdit) {
      setShowEdit((pre) => !pre);
    }
  }

  function AllowDrop(event) {
    event.preventDefault();
  }
  function Drag(event) {}
  function Drop(event) {
    event.preventDefault();
  }
  return (
    <>
      <Nav />
      <div className="cancelOrder">
        <Button className="ant-button" shape="primary" onClick={() => setShowUpdate((pre) => !pre)}>
          新增原因
        </Button>
        <div className="cancelOrder-container">
          <table>
            <thead>
              <tr>
                <th>排序</th>
                <th>原因項目</th>
                <th>狀態</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody onDrop={(e) => Drop(e)} onDragOver={(e) => AllowDrop(e)}>
              {Items.map((e, index) => {
                return (
                  index < 10 && (
                    <tr key={e.id} draggable={true} onDragStart={(e) => Drag(e)}>
                      <td>
                        <i className="fa-solid fa-bars" style={{ fontSize: "1.5rem" }}></i>
                      </td>
                      <td>{e.name}</td>
                      <td>{<Switch />}</td>
                      <td>
                        <button style={{ color: "rgb(64, 163, 229)" }} onClick={() => setShowEdit((pre) => !pre)}>
                          編輯
                        </button>
                        <button style={{ color: "rgb(225, 56, 138)" }} onClick={() => setShow((pre) => !pre)}>
                          刪除
                        </button>
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
          {show ? <CheckDelete yes={YesHandler} no={NoHandler} /> : ""}
          {showUpdate ? <CheckUpdate yes={YesHandler} no={NoHandler} /> : ""}
          {showEdit ? <CheckEdit yes={YesHandler} no={NoHandler} /> : ""}
        </div>
      </div>
    </>
  );
};

export default CancelOrder;
