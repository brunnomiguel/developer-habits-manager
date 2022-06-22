import { Container, InputContainer } from "./style";

function Input( { label, name, register, ...rest } ) {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;