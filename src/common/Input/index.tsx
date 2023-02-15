import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder="", type, onChange }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      type={type}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default Input;
