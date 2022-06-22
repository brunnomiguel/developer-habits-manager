import { Container } from './styles';

const Button = ({ children, loginDesk = false, ...rest }) => {
    return (
        <Container loginDesk={loginDesk} type='buttom' {...rest}>
            {children}
        </Container>
    )
    
};

export default Button;