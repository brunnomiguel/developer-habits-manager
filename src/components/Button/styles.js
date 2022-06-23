import styled from 'styled-components';


export const Container = styled.button`
    background: ${(props) => (props.loginDesk ? 'var(--green-1)' :
    props.loginMobile ? 'var(--green-1)' :
    props.ativMetaDesk ? 'var(--green-2)' : 
    props.ativMetaMobile ? 'var(--green-2)' :
    props.addDesk ? 'var(--green-2)' :
    props.editDesk ? 'var(--green-2)' : 
    props.modal ? 'var(--green-1)' : 'var(--green-2)'
    )}; 

    width: ${(props) => (
    props.ativMetaDesk ? '160px' : 
    props.ativMetaMobile ? '90px' :
    props.addDesk ? '100px' :
    props.editDesk ? '62px' : 
    props.small ? '35px' : '100%'
    )}; 

    height: ${(props) => (props.loginDesk ? '60px' :
    props.loginMobile ? '43px' :
    props.ativMetaDesk ? '32px' : 
    props.ativMetaMobile ? '32px' :
    props.addDesk ? '64px' :
    props.editDesk ? '46px' : 
    props.modal ? '39px' : 
    props.menuMobile ? '42' : '30px'
    )}; 

    font-family: ${(props) => (props.share ? 'var(--font-share-tech)' : 
    'var(--font-lexend)'
    )}; 

    color: ${(props) => (props.white ? 'var(--white-1)' :
    'var(x)')}; 
    
    border-radius: 5px;
`;
