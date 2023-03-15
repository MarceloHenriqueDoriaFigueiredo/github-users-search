import styled from "styled-components";

export const Searchs = styled.div`
    background-color: #372e4e;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
`

export const SearchContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    input, button {
        padding: 0.6rem;
        border-radius: 3px;
        border: none;
        color: #372e4e;
    }

    button {
        background-color: #369b6c;
        cursor: pointer;
}

`