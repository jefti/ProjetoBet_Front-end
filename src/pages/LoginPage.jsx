import styled from 'styled-components';
import AuthContainer from '../components/authContainer';
import '../styles/AuthorizationStyle.css';
import { Link } from 'react-router-dom';
import FlexBox from '../components/flexBox';

export default function LoginPage(){
    return(
        <>
            <AuthContainer>
                <BlankSpace></BlankSpace>
                <form action="">
                    <input type="text" placeholder='E-mail'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login!</button>
                </form>
                <FlexBox>
                    <Link to={"/register"}>Registre-se aqui!</Link>
                </FlexBox>

            </AuthContainer>
        </>
    )
}

const BlankSpace = styled.div`
    height: 200px;
`

