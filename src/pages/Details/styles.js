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
    padding: 2.4rem;
  }
`;

export const Content = styled.div`
  max-width: 113rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
  }

  > p {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    text-align: justify;
  }

  .tags {
    padding: 4rem 0;
    display: flex;
    gap: .8rem;
  }

  .user-span {
    display: flex;
    gap: .8rem;
    align-items: center;
    padding-bottom: 0;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }

  .movie-title {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      margin-top: 2.4rem;
      margin-bottom: 2.4rem;
      margin-right: 2.4rem;
    }

    > div {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
    }
  }
`;