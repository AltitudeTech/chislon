import styled from "styled-components";

const ButtonStyle = styled.button`
  border: none;
  padding: 8px 20px;
  color: #fff;
  font-size: 0.8rem;
  background: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  &.yellow {
    background: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
  }
  &.gold {
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.yellow};
    font-weight: 800;
  }
`;

export default ButtonStyle;
