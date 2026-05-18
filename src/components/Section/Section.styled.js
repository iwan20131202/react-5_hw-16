import styled from "styled-components";

export const SectionWrapper = styled.section`
  max-width: 520px;
  margin: 32px auto;
  padding: 28px;

  background: linear-gradient(145deg, #ffffff, #f8f9fb);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 24px;

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(10px);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(0, 0, 0, 0.1);

    box-shadow:
      0 14px 40px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
`;

export const SectionTitle = styled.h2`
  position: relative;

  margin: 0 0 22px;
  padding-bottom: 12px;

  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.5px;

  color: #1f1f1f;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 72px;
    height: 4px;

    border-radius: 999px;

    background: linear-gradient(90deg, #7c5cff 0%, #5ea2ff 50%, #64dfdf 100%);

    box-shadow: 0 2px 10px rgba(124, 92, 255, 0.35);
  }
`;
