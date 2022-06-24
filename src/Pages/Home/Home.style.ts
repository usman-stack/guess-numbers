import styled from "styled-components";

interface BannerProps {
   isPass:boolean
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 40px;
`;
const ButtonStyle = styled.button`
  color: #827397;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border: 2px solid #92ba92;
  border-radius: 3px;
  background: #fff;
  &:hover{
    cursor: pointer;
  }
 
`;
const InputStyle = styled.input`
  padding: 10px;
  background: none;
  width: 350px;
  border: 2px solid #92ba92;
  &:focus {
        outline: none;
        border: 1px solid #363062;
    }
`;
const WrapperStyle = styled.div`
  display: flex;
  grid-gap: 20px;
`;
const BannerStyle = styled.div<BannerProps>`
   width: 90%;
   padding: 10px 40px;
   display: flex;
   text-align: center;
   font-size: 20px;
   border: 1px solid black;
   color:${props => props.isPass ? 'green' : 'red'};
`
export { HomeStyle, ButtonStyle, InputStyle, WrapperStyle,BannerStyle };
