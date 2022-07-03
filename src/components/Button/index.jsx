import { StyledButton } from "./styles";

const Button = ({
  children,
  darkSchema = false,
  loginDesk = false,
  share = false,
  white = false,
  ...rest
}) => {
  return (
    <StyledButton
      darkSchema={darkSchema}
      loginDesk={loginDesk}
      share={share}
      white={white}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
