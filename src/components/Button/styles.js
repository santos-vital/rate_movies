import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 5.6rem;
  border: 0;
  padding: 1.6rem 14.5rem;
  margin-top: 2.4rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;