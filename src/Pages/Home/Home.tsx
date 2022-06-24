import React, { useState } from "react";
import {
  HomeStyle,
  ButtonStyle,
  InputStyle,
  WrapperStyle,
  BannerStyle,
} from "./Home.style";
import Chart from "../../components/charts/chart";

const Home = () => {
  const [isStart, setStart] = useState(false);
  const [inputValue, setInputValue] = useState<any>();
  const [isPass, setIsPass] = useState<boolean>(true);
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
  const [genratedSequence, setGenratedSequence] = useState<any>([]);

  let newArr = new Array();

  const handleStart = () => {
    setStart(true);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // check user input is sequence is correct
    // or not by matching genrated sequence

    if (!inputValue || genratedSequence.length == 0)
      alert("Please Play Game and add Sequence first");
    else {
      const text = inputValue.split(",");
      for (let i = 0; i < text.length; i++) {
        newArr.push(parseInt(text[i]));
      }
      console.log("newArr", newArr, genratedSequence);
      if (newArr.length !== genratedSequence.length) {
        setIsPass(false);
      } else {
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] === genratedSequence[i]) {
            setIsPass(true);
          } else {
            setIsPass(false);
          }
        }
      }
      setIsBannerVisible(true);
    }
  };

  return (
    <HomeStyle>
      {isBannerVisible ? (
        <BannerStyle isPass>
          {isPass ? <p>Valid Sequence</p> : <p>Invalid Sequence</p>}
        </BannerStyle>
      ) : null}
      <Chart
        isStart={isStart}
        setStart={setStart}
        genratedSequence={genratedSequence}
        setGenratedSequence={setGenratedSequence}
      />
      <WrapperStyle>
        <ButtonStyle onClick={handleStart}>Start</ButtonStyle>
        <InputStyle placeholder="use ',' between sequences e.g 2,4,6,8,3,2  " onChange={handleInputChange} />
        <ButtonStyle onClick={handleSubmit}>Submit</ButtonStyle>
      </WrapperStyle>
    </HomeStyle>
  );
};

export default Home;
