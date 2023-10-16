import styled from "styled-components"

export default function AuthContainer({children}){
    return (
        <SuperContainer>
            <LogoTitle>
                <ion-icon name="football-outline"></ion-icon>
                Luck Bet
            </LogoTitle>
            {children}
        </SuperContainer>
    )
}


const SuperContainer = styled.div`
    background-color: #252323;
    width: 54vw;
    height: 96vh;
    margin: 2vh 1vw;
    border-radius: 2vw;
    padding: 5vw;
    box-sizing: border-box;
    color: #DCDEE7;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const LogoTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d6d6d6;
    font-size: 108px;
    font-weight: 200;
    font-style: italic;
    margin-bottom: 50px;
    text-decoration: underline;
    ion-icon{
        font-size: 96px;
        font-weight: 100;
    }
`