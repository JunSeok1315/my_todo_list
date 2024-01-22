import { useCallback, useState } from "react";

const Header = ({
  title,
  setTitle,
  content,
  setContent,
  titleAndContent,
  setTitleAndContent,
}) => {
  // 추가하기 버튼
  const addBtn = () => {
    const newCard = {
      id: titleAndContent.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTitleAndContent([...titleAndContent, newCard]);
    setTitle("");
    setContent("");
  };
  return (
    <div className="add">
      <div>
        제목
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="제목"
        />
        내용
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          className="제목"
        />
      </div>
      <button onClick={addBtn}>추가하기</button>
    </div>
  );
};

export default Header;
