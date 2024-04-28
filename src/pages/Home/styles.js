import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    margin-top: 4.8rem;
    margin-bottom: 3.8rem;

    > h1 {
      font-weight: 400;
    }
  }

  > main {
    max-width: 120rem;
    margin: 0 auto;
    overflow-y: auto;

    > footer {
      background-color: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3.2rem;
  height: 4.8rem;
  border-radius: .8rem;
  gap: .8rem;
`;