import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 100%;
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: gray;
  border-radius: 10px;
`;

export const 제목 = styled.input`
  margin: 0 10px 0 10px;
`;

export const MainContainer = styled.div`
  width: 97%;
  margin: auto;
`;

export const MainName = styled.div`
  margin: 15px 0 15px 0;
  font-weight: bold;
  font-size: 30px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TodoCard = styled.div`
  width: 248px;
  height: 130px;
  border: 1px solid black;
  padding: 15px;
  margin: 5px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const CardTitleContentDeadline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 25px;
  ${({ isDone }) => isDone && "text-decoration: line-through;"}
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Btn = styled.button`
  width: 100px;
`;

export const 셀렉트 = styled.select`
  margin-left: 5px;
  margin-bottom: 10px;
`;
