import React from "react";

export default function CheckDelete({ yes, no }) {
  return (
    <div className="check">
      <div className="check-view">
        <h2>刪除確認</h2>
        <p>您確定要刪除此筆資料嗎?</p>
        <div>
          <button onClick={no}>取消</button>
          <button onClick={yes}>確定</button>
        </div>
      </div>
    </div>
  );
}
