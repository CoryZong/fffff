import React from "react";

const CheckEdit = ({ yes, no }) => {
  return (
    <div className="check">
      <div className="check-view">
        <h2>編輯原因</h2>
        <p>原因類型</p>
        <select name="" id="">
          <option value="">取消訂單原因</option>
        </select>
        <p>原因項目</p>
        <input type="text" />
        <div>
          <button onClick={no}>取消</button>
          <button onClick={yes}>確定</button>
        </div>
      </div>
    </div>
  );
};

export default CheckEdit;
