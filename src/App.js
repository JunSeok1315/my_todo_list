import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [titleAndContent, setTitleAndContent] = useState([
    {
      title: "리액트",
      content: "리액트 입문 완료",
    },
  ]);

  const addBtn = () => {
    const newCard = {
      title: title,
      content: content,
    };
    setTitleAndContent([...titleAndContent, newCard]);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <div>My Todo List</div>
          <div>React</div>
        </div>
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
        {/* 진행 */}
        <div className="mainContainer">
          <div className="mainName">진행</div>
          <div className="cards">
            {titleAndContent.map((i) => {
              return (
                <div className="card">
                  <div className="name">{i.title}</div>
                  <div className="name2">{i.content}</div>
                  <div className="btns">
                    <button className="btn">삭제하기</button>
                    <button className="btn">완료</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 완료 */}
        <div className="mainContainer">
          <div className="mainName">완료</div>
          <div className="card">
            <div className="name">리액트</div>
            <div className="name2">리액트 입문 완료</div>
            <div className="btns">
              <button className="btn">삭제하기</button>
              <button className="btn">취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
