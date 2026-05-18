import styled from "styled-components";

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 18px;
  border-radius: 14px;

  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  border: 1px solid rgba(0, 0, 0, 0.06);

  font-family: "Iosevka Charon", monospace;
  font-size: 18px;
  color: #2d2d2d;

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  cursor: default;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.12);

    box-shadow:
      0 10px 22px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;
