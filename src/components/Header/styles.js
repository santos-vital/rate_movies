import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;
  align-items: center;
  gap: 6.4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`;

export const Profile = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: .9rem;
  flex-shrink: 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  
    strong {
      display: flex;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;