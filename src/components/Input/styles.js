import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 1rem;
  margin-bottom: .8rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;