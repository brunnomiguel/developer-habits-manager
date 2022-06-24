import { Container, InputContainer } from "./style";

function Input({
  children,
  label,
  name,
  search = false,
  register,
  error,
  ...rest
}) {
  return (
    <Container isErrored={!!error} search={search}>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span> {error} </span>}
        </label>
      </div>

      <InputContainer isErrored={!!error} search={search}>
        <input
          {...(register !== undefined && { ...register(name) })}
          {...rest}
        />
        <button>{!!children && children}</button>
      </InputContainer>
    </Container>
  );
}

export default Input;
