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

    .nav-link {
        color: ${({ theme }) => theme.text }
    }

    .footer,
    .navbar {
        background: ${({ theme }) => theme.nav };
    }
    .copyright {
        background-color: ${({ theme }) => theme.darkgreen };
      }
    `