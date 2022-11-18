import styled from 'styled-components';

export const CardsWrapper = styled('div')`
&{
    display: flex;
    margin: 30px;
    flex-wrap: wrap;
    gap: 20px;
}
`

export const CardItem = styled('div')`
&{
    width: 180px;
    height: 300px;
    margin: 10px;
    padding: 10px;
    border: 2px dotted black;
    gap: 20px;
    cursor: pointer;
}
&:hover {
    background-color: #e4e3e5;
}
`
