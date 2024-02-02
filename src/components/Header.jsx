import { Add, 제목 } from "../style/TodoStyle";

const Header = ({
  title,
  setTitle,
  content,
  setContent,
  deadline,
  setDeadline,
  titleAndContent,
  setTitleAndContent,
}) => {
  // 추가하기 버튼
  const addBtn = () => {
    const newCard = {
      id: titleAndContent.length + 1,
      title: title,
      content: content,
      deadline: deadline,
      isDone: false,
    };
    setTitleAndContent([...titleAndContent, newCard]);
    setTitle("");
    setContent("");
    setDeadline("");
  };

  return (
    <Add>
      <div>
        제목
        <제목
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용
        <제목
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        마감일
        <제목
          type="date"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        ></제목>
      </div>
      <button onClick={addBtn}>추가하기</button>
    </Add>
  );
};

export default Header;
