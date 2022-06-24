import React, { useEffect, useRef, useState } from "react";
import { SliceStyle, CircleStyle } from "./charts.style";
import { PieChart } from "react-minimal-pie-chart";
import { data } from "../../utils";
import { count } from "console";
interface Random {
  id: number;
  color: string;
  rotate: string;
  isHighLighted: boolean;
}
const Chart = (props: any) => {
  const { isStart, genratedSequence, setGenratedSequence } = props;
  const [currentData, setCurrentData] = useState<any>(data);
  let counter = 0;
  let newData = new Array();
  let sequence = new Array();

  useEffect(() => {
    const handleRandom = () => {
      if (isStart) {
        if (counter >= 12) {
          setGenratedSequence(sequence);
          setCurrentData([...currentData, (currentData[11].isActive = false)]);
          return;
        } else {
          let random = Math.floor(Math.random() * 12);
          let available = sequence.includes(random)
          if(available) {
            random = Math.floor(Math.random() * 12);
          }
          console.log(random)
          let obj = currentData[random];
          obj = {
            ...obj,
            isActive: true,
          };

          newData = currentData.map((item: any) => {
            if (item.id == obj.id) {
              return obj;
            } else {
              return {
                ...item,
                isActive: false,
              };
            }
          });
          sequence.push(random);
        }
        counter++;
        setCurrentData(newData);
      }
    };
    const id = setInterval(handleRandom, 5000 / 12);
  }, [!isStart]);
  return (
    <CircleStyle>
      {currentData?.map((item: any) => {
        return (
          <SliceStyle
            rotate={item.rotate}
            isActive={item.isActive}
            color={item.color}
            id={item.id}
          >
            <p className="text-number">{item.id}</p>
          </SliceStyle>
        );
      })}
    </CircleStyle>
  );
};

export default Chart;
