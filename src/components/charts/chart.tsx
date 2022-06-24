import React, { useEffect, useState } from "react";
import { SliceStyle, CircleStyle } from "./charts.style";
import { data } from "../../utils";

const Chart = (props: any) => {
  const { isStart, isReset, setGenratedSequence, setStart, isStop } = props;
  const [currentData, setCurrentData] = useState<any>(data);
  let counter = 0;
  let newData = new Array();
  let sequence = new Array();
  let intervalTime = 5000 / 12;
  useEffect(() => {
    // to delay random highlighting of slices
    const myInterval = setInterval(handleRandom, intervalTime);
    function handleRandom() {
    
      if (isStart) {
        if (counter >= 12) {
          discardInterval();
          setGenratedSequence(sequence);
          setCurrentData([...currentData, (currentData[11].isActive = false)]);
          setStart(false);
          return;
        } else {
          let random = Math.floor(Math.random() * 12);
          let available = sequence.includes(random);
          if (available) {
            random = Math.floor(Math.random() * 12);
          }
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
          console.log(sequence);
        }
        counter++;
        setCurrentData(newData);
      }
    }

    function discardInterval() {
      clearInterval(myInterval);
    }
  }, [isStart]);

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
