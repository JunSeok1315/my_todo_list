import { useCallback, useState } from "react";

const Card = ({
  i,
  completedItems,
  setCompletedItems,
  setTitleAndContent,
  titleAndContent,
}) => {
  // 진행 완료 버튼
  const completeBtn = (id) => {
    const completedCard = {
      id: id.id,
      title: id.title,
      content: id.content,
      isDone: true,
    };
    setCompletedItems([...completedItems, completedCard]);
    setTitleAndContent((prevTitleAndContent) =>
      prevTitleAndContent.filter((i) => i.id !== id.id)
    );
  };
  // 진행 삭제하기
  const dleBtn = (id) => {
    const dleCard = titleAndContent.filter((i) => i.id !== id);
    setTitleAndContent(dleCard);
  };
  return (
    <div className="card" key={i.id}>
      <div className="name">{i.title}</div>
      <div className="name2">{i.content}</div>
      <div className="btns">
        <button onClick={() => dleBtn(i.id)} className="btn">
          삭제하기
        </button>
        <button className="btn" onClick={() => completeBtn(i)}>
          완료
        </button>
      </div>
    </div>
  );
};

export default Card;
