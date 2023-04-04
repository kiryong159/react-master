import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
0%{transform:rotate(0deg);}
50%{border-radius:50%}
100%{transform:rotate(360deg)}
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  animation: ${rotateAnimation} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <span>🔸</span>
      </Box>
    </Father>
  );
}

export default App;
