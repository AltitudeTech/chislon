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
  &.transparent {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.main};
    border: 1px solid ${(props) => props.theme.colors.main};
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 3px;
    &:hover {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.main};
    }
  }
`;

export default ButtonStyle;
