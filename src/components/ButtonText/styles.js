import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  gap: .8rem;
  align-items: center;
  
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_300};

  border: none;
  font-size: 1.6rem;
`;