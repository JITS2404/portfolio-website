import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px 0 30px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px -4px rgba(30, 41, 59, 0.05);
  border-radius: 24px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 170px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: #FFFFFF;
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 16px 30px -6px rgba(99, 102, 241, 0.1);
  }
`;

export const BoxNum = styled.div`
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #0F172A 0%, #4338CA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 12px;
`;

export const BoxText = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: #475569;
  font-weight: 500;
  text-align: left;
`;
