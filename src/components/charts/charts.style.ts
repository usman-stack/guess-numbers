import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

type ChartProps = {
  color: string;
  rotate: string;
  isActive: boolean
};
const CircleStyle = styled.div`
  position: relative;
  border-radius: 50%;
  width: 480px;
  height: 480px;
  overflow: hidden;
`;
const SliceStyle = styled.div<ChartProps>`
  transform: rotate(${(props) => props.rotate}) skewY(-60deg);
  position: absolute;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
  background-color: ${(props) => props.isActive ? "#C70A80" : props.color};
  display: flex;
  align-items: center;
  top: 0;
  right: 0;

  .text-number {
    transform: skewY(60deg) rotate(90deg);
    padding-left: 50px;
    color: white;
    font-size: 18px;
    animation: mymove 4s ease-in;
  }
  @keyframes mymove {
    50% {
      font-size: 40px;
    }
  }
`;
export { CircleStyle, SliceStyle };
