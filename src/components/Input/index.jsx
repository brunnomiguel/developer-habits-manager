import { Container, InputContainer } from "./style";

function Input({
  label,
  name,
  icon: Icon,
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
        {Icon && <Icon size={20} />}
        <input
          {...(register !== undefined && { ...register(name) })}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}

export default Input;
