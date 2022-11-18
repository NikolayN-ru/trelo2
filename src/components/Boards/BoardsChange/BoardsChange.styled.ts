import styled from 'styled-components';

export const BockDeskChangeWrapper = styled('div')`
&{
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    padding: 20px;
    display: flex;
    gap: 10px;
    align-items: center;

    input {
        height: 30px;
        font-size: 20px;
        color: #551ad6;
    }

    button {
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: #551ad6;
        color: #fff;
        padding: 10px;
        cursor: pointer;
    }
    button:hover {
        opacity: .7
    }
    button:active {
        background-color: #951ad6;
    }
}
`