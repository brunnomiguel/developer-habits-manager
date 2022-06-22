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

    width: ${(props) => (props.loginDesk ? '410px' :
    props.loginMobile ? '280px' :
    props.ativMetaDesk ? '160px' : 
    props.ativMetaMobile ? '90px' :
    props.addDesk ? '100px' :
    props.editDesk ? '62px' : 
    props.modal ? '222px' : 
    props.menuMobile ? '126px' : '35px'
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

    font-family: ${(props) => (props.loginDesk ? 'var(--font-share-tech)' :
    props.loginMobile ? 'var(--font-share-tech)' :
    props.ativMetaDesk ? 'var(--font-lexend)' : 
    props.ativMetaMobile ? 'var(--font-lexend)' :
    props.modal ? 'var(--font-share-tech)' : 
    props.menuMobile ? 'var(--font-lexend)' : 'var(--font-lexend)'
    )};    
`;
