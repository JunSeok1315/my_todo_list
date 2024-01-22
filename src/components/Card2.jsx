import { useCallback, useState } from "react";

const Card2 = ({
  completed,
  completedItems,
  setCompletedItems,
  setTitleAndContent,
  titleAndContent,
}) => {
  // 완료 삭제하기
  const dleBtn2 = (id) => {
    const dleCard = completedItems.filter((i) => i.id !== id);
    setCompletedItems(dleCard);
  };
  // 완료 취소 버튼
  const cancelBtn = (id) => {
    const canceledCard = {
      id: id.id,
      title: id.title,
      content: id.content,
    };
    setTitleAndContent([...titleAndContent, canceledCard]);
    setCompletedItems((prevCompletedItems) =>
      prevCompletedItems.filter((i) => i.id !== id.id)
    );
  };
  return (
    <div className="card" key={completed.id}>
      <div className="name">{completed.title}</div>
      <div className="name2">{completed.content}</div>
      <div className="btns">
        <button className="btn" onClick={() => dleBtn2(completed.id)}>
          삭제하기
        </button>
        <button className="btn" onClick={() => cancelBtn(completed)}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Card2;
