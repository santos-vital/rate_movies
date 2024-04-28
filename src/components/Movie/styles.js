import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  
  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > div {
    display: flex;
    gap: .6rem;
    margin-top: .8rem;
    margin-bottom: 1.5rem;
  }

  > p {
    width: 100%;

    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`;