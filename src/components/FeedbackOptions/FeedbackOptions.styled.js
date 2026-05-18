import styled, { css } from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 24px;
`;

const buttonVariants = {
  good: css`
    background: linear-gradient(135deg, #43c465, #2fa84f);
    box-shadow: 0 8px 20px rgba(67, 196, 101, 0.28);

    &:hover {
      box-shadow: 0 12px 28px rgba(67, 196, 101, 0.4);
    }
  `,

  neutral: css`
    background: linear-gradient(135deg, #ffb020, #f28c00);
    box-shadow: 0 8px 20px rgba(255, 176, 32, 0.28);

    &:hover {
      box-shadow: 0 12px 28px rgba(255, 176, 32, 0.4);
    }
  `,

  bad: css`
    background: linear-gradient(135deg, #ff4d4d, #d60000);
    box-shadow: 0 8px 20px rgba(214, 0, 0, 0.28);

    &:hover {
      box-shadow: 0 12px 28px rgba(214, 0, 0, 0.4);
    }
  `,
};

export const Button = styled.button`
  position: relative;
  overflow: hidden;

  min-width: 140px;
  padding: 14px 22px;

  border: none;
  border-radius: 14px;

  font-family: "Titillium Web", sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #fff;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  ${({ option }) => buttonVariants[option]}

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0) 80%
    );

    transform: translateX(-120%);
    transition: transform 0.7s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    filter: brightness(1.03);

    &::before {
      transform: translateX(120%);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px rgba(124, 92, 255, 0.22),
      0 10px 24px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;
