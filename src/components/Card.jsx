import {
  Btn,
  Btns,
  CardTitleContentDeadline,
  Name,
  TodoCard,
} from "../style/TodoStyle";

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
    <TodoCard key={i.id}>
      <CardTitleContentDeadline>
        <Name>{i.title}</Name>
        <div>{i.content}</div>
        <div>마감일 : {formattedDeadLind}</div>
      </CardTitleContentDeadline>

      <Btns>
        <Btn onClick={() => dleBtn(i.id)}>삭제하기</Btn>
        <Btn onClick={() => completeBtn(i)}>완료</Btn>
      </Btns>
    </TodoCard>
  );
};

export default Card;
