import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px 60px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 40px;
  }
`;
