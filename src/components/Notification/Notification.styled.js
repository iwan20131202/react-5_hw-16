import styled from "styled-components";

export const Message = styled.p`
  position: relative;

  margin: 20px 0;
  padding: 18px 22px;

  text-align: center;

  font-family: "Iosevka Charon", monospace;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.3px;

  color: #2f2f2f;

  background: linear-gradient(145deg, #ffffff, #f6f7fb);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;

  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  overflow: hidden;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background: linear-gradient(90deg, #7c5cff 0%, #5ea2ff 50%, #64dfdf 100%);
  }

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(124, 92, 255, 0.18);

    box-shadow:
      0 10px 28px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
`;
