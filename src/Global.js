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

    .footer,
    .navbar {
        background: ${({ theme }) => theme.nav };
    }
    .copyright {
        background-color: ${({ theme }) => theme.darkgreen };
      }

    #cart span{
        background-color: ${({ theme }) => theme.body };
    }
    .bar1, .bar2, .bar3 {
        background-color: ${({ theme }) => theme.text }
    }

    .active {
        border-color: ${({ theme }) => theme.darkgreen };
      }
    `