import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [completedItems, setCompletedItems] = useState([]);
  const [titleAndContent, setTitleAndContent] = useState([
    {
      id: 0,
      title: "리액트",
      content: "리액트 입문 완료",
      isDone: false,
    },
  ]);

  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <Header
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          titleAndContent={titleAndContent}
          setTitleAndContent={setTitleAndContent}
        />
        {/* 진행 */}
        <div className="mainContainer">
          <div className="mainName">진행</div>
          <div className="cards">
            {titleAndContent.map((i) => {
              return (
                <Card
                  i={i}
                  completedItems={completedItems}
                  setCompletedItems={setCompletedItems}
                  setTitleAndContent={setTitleAndContent}
                  titleAndContent={titleAndContent}
                />
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
                <Card2
                  completed={completed}
                  completedItems={completedItems}
                  setCompletedItems={setCompletedItems}
                  setTitleAndContent={setTitleAndContent}
                  titleAndContent={titleAndContent}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
