import { Link } from 'react-router-dom';
import AuthContainer from '../components/authContainer';
import '../styles/AuthorizationStyle.css';
import FlexBox from '../components/flexBox';

export default function RegisterPage(){
    return(
        <>
            <AuthContainer>
                <form action="">
                    <input type="text" placeholder='Name'/>
                    <input type="Date" placeholder='Birth date'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type='password' placeholder='Password'/>
                    <input type='password' placeholder='Password'/>
                    <button>Registrar!</button>
                </form>
                <FlexBox>
                    <Link to={"/"}>Faça o Login aqui!</Link>
                </FlexBox>
            </AuthContainer>
        </>
    )
}