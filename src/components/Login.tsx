import React, { useEffect, useState } from "react";
import * as St from "./styles";
import Icon_removeButton from "../assets/Icons_removeButton.png";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import Icon_Logo from "../assets/HANDA LAB_CI_Symbol.png";
import { fetchPin } from "../api/fetch";

interface CircleProps {
  filled: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, { openModal, closeModal }] = useModal();
  const [pinNum, setPinNum] = useState<Array<number>>([]);
  const [input, setInput] = useState<Array<number | string | { img: string }>>(
    []
  );
  const [checkPin, setCheckPin] = useState(false);
  let isShow = true;

  const Circle: React.FC<CircleProps> = ({ filled }) => {
    // console.log(input.length);
    // if (index === 3 && input.length === 4) {
    //   // console.log("isFull True로 바꿀거야");
    //   isFull = true;
    //   console.log(isFull);
    //   // console.log("마지막 서클 호출 후 값 true 변환");
    //   // console.log("index", index);
    // }
    // checkPinNumber();
    return (
      <St.LoginHiddenNumber
        className={filled ? "filled" : ""}
      ></St.LoginHiddenNumber>
    );
  };

  const Keypad: React.FC<{
    onKeyPress: (num: number | string | { img: string }) => void;
  }> = ({ onKeyPress }) => {
    const numbers = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "",
      0,
      {
        img: Icon_removeButton,
      },
    ];

    return (
      <St.LoginNumberBox>
        {numbers.map((number, index) => (
          <St.LoginNumber key={index} onClick={() => onKeyPress(number)}>
            {typeof number === "object" &&
            number !== null &&
            "img" in number ? (
              <img src={number.img} alt={`icon-${index}`} />
            ) : (
              number
            )}
          </St.LoginNumber>
        ))}
      </St.LoginNumberBox>
    );
  };

  useEffect(() => {
    const getPin = async () => {
      try {
        let data = await fetchPin("http://172.30.1.15:3001/apis/pin");
        setPinNum([data[0].pin].toString().split("").map(Number));
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    getPin();
  }, []);

  const arraysEqual = (
    a: Array<number | string | { img: string }>,
    b: Array<number | string | { img: string }>
  ) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const handleKeyPress = (num: number | string | { img: string }) => {
    if (typeof num === "object" && num !== null && "img" in num) {
      handleRemoveNumber();
    } else {
      // console.log("input", input.length);

      const newInput = [...input, num];
      // console.log("newInput.length", newInput.length);
      // console.log("input", input.length);
      // if (newInput.length === 1) {
      //   // setIsShow(true);
      //   isShow = true;
      // }
      if (newInput.length <= 4) {
        setInput(newInput);
        if (newInput.length === 4) {
          setCheckPin(true);
        }
      }
    }
  };

  const handleRemoveNumber = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  // const checkPinNumber = () => {
  //   // console.log("나 호출됬어");
  //   // console.log("체크", isFull);
  //   if (isFull) {
  //     if (arraysEqual(pinNum, input)) {
  //       // setIsShow(true);
  //       // alert("ok");
  //       // setInput([]);
  //       navigate("/");
  //     } else {
  //       // setIsShow(false);
  //       isShow = false;
  //       // alert("비밀번호를 잘못입력하셨습니다.");
  //       setInput([]);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (arraysEqual(pinNum, input)) {
  //     // alert("ok");
  //     setInput([]);
  //     // navigate("/");
  //   } else {
  //     alert("비밀번호를 잘못입력하셨습니다.");
  //     setInput([]);
  //   }
  // }, [isFull]);

  useEffect(() => {
    if (checkPin) {
      const timer = setTimeout(() => {
        console.log("input.length", input);

        if (arraysEqual(pinNum, input)) {
          navigate("/");
        } else {
          alert("틀림");
        }
        setCheckPin(false);
      }, 300);
    }
  });

  return (
    <St.LoginContainer>
      <St.LoginLogo src={Icon_Logo} alt="logo" />
      <St.LoginContent>비밀번호를 입력해주세요</St.LoginContent>
      <St.LoginHiddenNumberBox>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Circle key={index} filled={index < input.length} />
          ))}
      </St.LoginHiddenNumberBox>
      <div>{isShow ? "" : "틀림"}</div>
      <Keypad onKeyPress={handleKeyPress}></Keypad>
      <St.LoginButtonSection>
        <St.LoginFindPW onClick={openModal}>비밀번호 찾기</St.LoginFindPW>
        <St.LoginFindPW onClick={() => navigate("/settingPin")}>
          비밀번호 재설정
        </St.LoginFindPW>
      </St.LoginButtonSection>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </St.LoginContainer>
  );
};

export default Login;
