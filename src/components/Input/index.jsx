import { Container, InputContainer } from "./style";

function Input({
  children,
  label,
  name,
  modal = false,
  search = false,
  register,
  error,
  searchHabit,
  inputHabits,
  ...rest
}) {
  return (
    <Container isErrored={!!error} search={search}>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span> {error} </span>}
        </label>
      </div>

      <InputContainer modal={modal} isErrored={!!error} search={search}>
        <input
          {...(register !== undefined && { ...register(name) })}
          {...rest}
        />
        {!! children && <div onClick={() => searchHabit(inputHabits)}>{children}</div>}
      </InputContainer>
    </Container>
  );
}

export default Input;
