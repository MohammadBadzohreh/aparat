import styled from 'styled-components';
export default  styled.div`
background-image: url(${props => props.src});
height: 320px;
background-repeat: no-repeat;
position:absolute;
right:0;
left:0;
top:0;
background-size: cover;
background-position: center;

`;