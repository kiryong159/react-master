import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 35px;
`;

function Coins() {
  return <Title>Coins font 누니또 적용되냐?</Title>;
}

export default Coins;
