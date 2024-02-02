import {
  Btn,
  Btns,
  CardTitleContentDeadline,
  Name,
  TodoCard,
} from "../style/TodoStyle";

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
      deadline: id.deadline,
    };
    setTitleAndContent([...titleAndContent, canceledCard]);
    setCompletedItems((prevCompletedItems) =>
      prevCompletedItems.filter((i) => i.id !== id.id)
    );
  };

  // 데이터포맷
  const formattedDeadLind = new Date(completed.deadline).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }
  );

  return (
    <TodoCard key={completed.id}>
      <CardTitleContentDeadline isDone={completed.isDone}>
        <Name>{completed.title}</Name>
        <div>{completed.content}</div>
        <div>마감일 : {formattedDeadLind}</div>
      </CardTitleContentDeadline>
      <Btns>
        <Btn onClick={() => dleBtn2(completed.id)}>삭제하기</Btn>
        <Btn onClick={() => cancelBtn(completed)}>취소</Btn>
      </Btns>
    </TodoCard>
  );
};

export default Card2;
