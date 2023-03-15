import styled from "styled-components";

export const UserContainer = styled.div`
    background-color: #372e4e;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    img {
    width: 140px;
    height: 140px;
    border: 4px solid #594786;
    border-radius: 11%;
}

p {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

p svg {
    fill: #369b6c;
    font-size: 1.5rem;
}

p span {

    color: #fff;
    font-weight: bold;
}
`

export const StatusContainer = styled.div`
    display: flex;

    div {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    div:first-child {
        border-right: 1px solid #fff;
    }
`

export const StatusNumber = styled.p`
    background-color: #369b6c;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    justify-content: center;
`