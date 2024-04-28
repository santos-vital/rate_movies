import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    flex-wrap: wrap;
    padding: 1.6rem;
    border-radius: .8rem;
    gap: 2.4rem;

    * {
      margin: 0;
    }
  }
`;

export const Form = styled.form`
  width: 114rem;
  padding: 0 12.3rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.4rem;

    margin-bottom: 4rem;

    a {
      font-size: 1.6rem;
    }
  }

  > div {
    display: flex;
    gap: 4rem;
    margin-bottom: 3.2rem;

    button:nth-of-type(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }
`;