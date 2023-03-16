import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #fff;
}

body {
    background-color: #201b2c;
    padding: 2rem;
}

p {
    text-align: center;
}

a {
    text-decoration: none;
}
`
