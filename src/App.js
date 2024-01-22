import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [titleAndContent, setTitleAndContent] = useState([
    {
      id: 0,
      title: "리액트",
      content: "리액트 입문 완료",
      isDone: false,
    },
  ]);

  const [completedItems, setCompletedItems] = useState([]);
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
  // 진행 삭제하기
  const dleBtn = (id) => {
    const dleCard = titleAndContent.filter((i) => i.id !== id);
    setTitleAndContent(dleCard);
  };
  // 완료 삭제하기
  const dleBtn2 = (id) => {
    const dleCard = completedItems.filter((i) => i.id !== id);
    setCompletedItems(dleCard);
  };
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
            })}
          </div>
        </div>
        {/* 완료 */}
        <div className="mainContainer">
          <div className="mainName">완료</div>
          <div className="cards">
            {completedItems.map((completed) => {
              return (
                <div className="card" key={completed.id}>
                  <div className="name">{completed.title}</div>
                  <div className="name2">{completed.content}</div>
                  <div className="btns">
                    <button
                      className="btn"
                      onClick={() => dleBtn2(completed.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn"
                      onClick={() => cancelBtn(completed)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
