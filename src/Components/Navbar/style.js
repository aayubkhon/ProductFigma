import styled from "styled-components";

const Container = styled.div`
background: #00353B;
height:52px;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
`

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:auto;
`


const Pages = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:300px;
margin-left:auto;
cursor: pointer;
p{
color: white;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}
`

const Icons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-right:70px;
`

const Carts = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-left:20px;
img{
    width:20px;
    height:15px;
}
p{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin-left:6px;
}

`
 
const Button = styled.button`
background: #FFFFFF;
border: 1px solid #FFFFFF;
border-radius: 8px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #1F2937;
width:106px;
height:40px;
margin-left:24px;
cursor: pointer;
`

export {Container,Wrapper,Pages,Icons,Carts,Button}