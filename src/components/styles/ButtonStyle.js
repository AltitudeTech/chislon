import styled from "styled-components";

const ButtonStyle = styled.button`
  border: none;
  padding: 8px 20px;
  color: #fff;
  font-size: 0.8rem;
  background: ${(props) => props.theme.colors.main};
  border-radius: 5px;
`;

export default ButtonStyle;
