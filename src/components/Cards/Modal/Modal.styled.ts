import styled from 'styled-components';

export const ModalWrapper = styled('div')`
&{
    background-color: #c9c9c9;
    width:400px;
    height: 400px;
    position: fixed;
    top: 25%;
    left: 30%;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
`

export const BlockChange = styled('div')`
&{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
`

export const Input = styled('input')`
&{
    width: 300px;
    height: 50px;
    border: none;
    font-size: 20px;
    color: #3c3c3d;
}
`

export const ButtonSuccess = styled('button')`
&{
    width: 100px;
    height: 50px;
    background-color: #3c04d6;
    border: none;
    font-size: 10px;
    color: #fff;
    border-radius: 40%;
    transition: all 0.3s;
    cursor: pointer;
}
&:hover {
    scale: 1.2;
    border-radius: 10%;
    background-color: #38139e;
}
`

export const ButtonClose = styled('button')`
&{
    width: 50px;
    height: 50px;
    background-color: #d12121;
    border: none;
    font-size: 10px;
    color: #fff;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 40%;
    transition: all 0.3s;
    cursor: pointer;
}
&:hover {
    rotate: 360deg;
    border-radius: 10%;
    background-color: #941616;
}
`