import { Container, InputContainer } from "./style";

function Input({ label, name, register, error, ...rest }) {
  return (
    <Container>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span> {error} </span>}
        </label>
      </div>

      <InputContainer isErrored={!!error}>
        <input
          {...(register !== undefined && { ...register(name) })}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}

export default Input;
