import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import {
  Body,
  Cards,
  Container,
  MainContainer,
  MainName,
  TodoHeader,
  셀렉트,
} from "./style/TodoStyle";
import GlobalStyle from "./style/TodoGlobalStyle";

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
    <Body>
      <GlobalStyle />
      <Container>
        <TodoHeader>
          <div>My Todo List</div>
          <div>React</div>
        </TodoHeader>
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
        <MainContainer>
          <MainName>진행</MainName>
          {/* 정렬 */}
          <div>
            <셀렉트 value={selectedSort} onChange={handleSortChange}>
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </셀렉트>
          </div>
          <Cards>
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
          </Cards>
        </MainContainer>
        {/* 완료 */}
        <MainContainer>
          <MainName>완료</MainName>
          {/* 정렬 */}
          <div>
            <셀렉트 value={selectedSort2} onChange={handleSortChange2}>
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </셀렉트>
          </div>
          <Cards>
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
          </Cards>
        </MainContainer>
      </Container>
    </Body>
  );
}

export default App;
