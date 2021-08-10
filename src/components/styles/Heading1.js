import styled from "styled-components";

const Heading1Style = styled.h1`
  color: ${(props) => props.theme.colors.mainLight};
  &.thin {
    font-weight: 400;
  }
`;

export default Heading1Style;
