import { FC } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: red;
  border: none;
  padding: 1rem;
  border-radius: 1.5rem;
  min-width: 150px;
  color: white;
`;

interface Props {
  label: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ label, onClick }) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};
