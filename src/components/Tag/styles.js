import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  margin-right: .6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, $backgroundcolor }) => $backgroundcolor ? $backgroundcolor : theme.COLORS.BACKGROUND_600};
`;