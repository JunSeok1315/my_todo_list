import { useCallback, useState, useEffect } from "react";

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
      deadline: id.deadline,
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

  // 데이터포맷
  const formattedDeadLind = new Date(i.deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="card" key={i.id}>
      <div className="cardTitleContentDeadline">
        <div className="name">{i.title}</div>
        <div className="name2">{i.content}</div>
        <div className="deadline">마감일 : {formattedDeadLind}</div>
      </div>

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
