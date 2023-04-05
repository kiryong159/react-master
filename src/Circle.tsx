import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "aqua"}>
      {text}
    </Container>
  );
}

export default Circle;
