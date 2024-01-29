import { useCallback, useState, useEffect } from "react";

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
        마감일
        <input
          type="date"
          className="제목"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={addBtn}>추가하기</button>
    </div>
  );
};

export default Header;
