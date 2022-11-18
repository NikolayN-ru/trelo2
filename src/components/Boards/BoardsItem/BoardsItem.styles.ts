import styled from 'styled-components';

export const DeskWrapper = styled('div')`
&{
    max-width: 60%;
    margin: 0 auto;
    background-color: #ebebeb;
    padding: 20px;
    display: flex;
    gap: 10px;
    border-radius: 5px;
    margin-bottom: 30px;
    overflow: auto;
}
`

export const DeskItem = styled('div') <{ active: boolean }>`
&{
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 0;
    font-size: 20px;
    height: 70px;
    background-color: ${_ => _.active ? '#0e8feb' : '#dbdbdb'};
    border-radius: 5px;
    cursor: grab;
}
&:hover {
    background-color: #b2acbd;
    color: #fff;
    cursor: pointer;
}
`