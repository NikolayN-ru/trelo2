import styled from 'styled-components';

export const AddTodoWrapper = styled('div')`
&{
    max-width: 65%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    gap :10px;
    justify-content: center;
    background-color: #ebebeb;
    border-radius: 5px;

    button {
        /* height: 40px; */
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

    input {
        height: 30px;
        font-size: 20px;
        color: #551ad6;
    }
}
`