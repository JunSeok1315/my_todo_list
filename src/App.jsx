import { useCallback, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedSort, setSelectedSort] = useState("asc");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedSort2, setSelectedSort2] = useState("asc");
  const [sortOrder2, setSortOrder2] = useState("asc");
  const [completedItems, setCompletedItems] = useState([]);
  const [titleAndContent, setTitleAndContent] = useState([
    {
      id: 0,
      title: "리액트",
      content: "리액트 입문 완료",
      deadline: "2024-01-29",
      isDone: false,
    },
  ]);

  // 진행 정렬
  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSelectedSort(newSortOrder);
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    const sortedList = [...titleAndContent].sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setTitleAndContent(sortedList);
  }, [sortOrder]);

  // 완료 정렬
  const handleSortChange2 = (event) => {
    const newSortOrder2 = event.target.value;
    setSelectedSort2(newSortOrder2);
    setSortOrder2(newSortOrder2);
  };

  useEffect(() => {
    const sortedList = [...completedItems].sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return sortOrder2 === "asc" ? dateA - dateB : dateB - dateA;
    });
    setCompletedItems(sortedList);
  }, [sortOrder2]);

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
          deadline={deadline}
          setDeadline={setDeadline}
          titleAndContent={titleAndContent}
          setTitleAndContent={setTitleAndContent}
        />
        {/* 진행 */}
        <div className="mainContainer">
          <div className="mainName">진행</div>
          {/* 정렬 */}
          <div>
            <select
              className="셀렉트"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </select>
          </div>
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
          {/* 정렬 */}
          <div>
            <select
              className="셀렉트"
              value={selectedSort2}
              onChange={handleSortChange2}
            >
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </select>
          </div>
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
