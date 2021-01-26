import styled from 'styled-components';

const Button = styled.button`
    margin-top: 10px;
    width: 281px;
    height: 38px;
    border-radius: 4px;
    border: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    line-height: 16px;
    font-weight: 700px;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        color: #686868;
        opacity: 1;
    }
`;

export default Button;
