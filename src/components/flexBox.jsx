import styled from "styled-components"

export default function FlexBox({children}){
    return(
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`