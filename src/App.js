import styled, { keyframes } from "styled-components";

const Father = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
0%{transform:rotate(0deg);}
50%{border-radius:50%}
100%{transform:rotate(360deg)}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.theme.textColor};
  width: 100px;
  height: 100px;
  animation: ${rotateAnimation} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Emoji as="p">🔸white smoke</Emoji>
      </Box>
    </Father>
  );
}

export default App;
