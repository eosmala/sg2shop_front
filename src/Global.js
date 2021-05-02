import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text }
    }
    .card, .btn, .modal-content, .modal-content a:hover {
        background: ${({ theme }) => theme.card };
        color: ${({ theme }) => theme.text }
    }

    .nav-link, #cart-icon, .card-title a, .modal-body a, #order-page a, #order-page button, .modal-body button {
        color: ${({ theme }) => theme.text }
    }

    .footer,
    .navbar {
        background: ${({ theme }) => theme.nav };
    }
    .copyright {
        background-color: ${({ theme }) => theme.darkgreen };
      }

    #cart-icon span{
        background-color: ${({ theme }) => theme.body };
    }
    .bar1, .bar2, .bar3 {
        background-color: ${({ theme }) => theme.text }
    }

    .active {
        border-color: ${({ theme }) => theme.darkgreen };
      }

    .btn-card, .modal-footer a:hover {
        background-color: ${({ theme }) => theme.darkgreen };
      }

    #order-page .bg {
        background: ${({ theme }) => theme.card };
    }
    `