import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text }
    }
    .card,
    .btn {
        background: ${({ theme }) => theme.card };
        color: ${({ theme }) => theme.text }
    }

    .nav-link, #cart {
        color: ${({ theme }) => theme.text }
    }

    .navbar {
        background: ${({ theme }) => theme.nav };
    }

    #cart span{
        background-color: ${({ theme }) => theme.body };
    }
    .bar1, .bar2, .bar3 {
        background-color: ${({ theme }) => theme.text }
    }
    `