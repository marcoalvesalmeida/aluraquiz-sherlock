import styled from 'styled-components';

const Input = styled.input`
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    width: 281px;
    height: 38px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 3.5px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default Input;
