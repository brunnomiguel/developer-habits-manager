import { Container } from './styles';

const Button = ({ children, loginDesk = false, share = false, white = false, ...rest }) => {
    return (
        <Container loginDesk={loginDesk} share={share} white ={white} type='buttom' {...rest}>
            {children}
        </Container>
    )
    
};

export default Button;