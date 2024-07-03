import React, { useEffect, useState } from "react";
import * as St from "./styles";
import icon_removeButton from "../assets/Icons_removeButton.png";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import Icon_Logo from "../assets/HANDA LAB_CI_Symbol.png";
import { fetchPin, fetchPostPin } from "../api/fetch";

const ResetPin: React.FC = () => {
  const [isOpen, { openModal, closeModal }] = useModal();
  const [input, setInput] = useState<
    Array<number | string | { img: string } | { pin: string }>
  >([]);

  const [confirmPin, setConfirmPin] = useState([{ pin: "" }]);
  const [checkPin, setCheckPin] = useState(false);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const Circle: React.FC<{ filled: boolean }> = ({ filled }) => {
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
      { img: icon_removeButton },
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

  const arraysEqual = (
    a: Array<number | string | { img: string } | { pin: string }>,
    b: Array<number | string | { img: string } | { pin: string }>
  ) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };
  useEffect(() => {
    if (checkPin) {
      const timer = setTimeout(() => {
        console.log("input", input);
        console.log("confirmPin", confirmPin);
        if (arraysEqual(confirmPin, input)) {
          setIsCorrect(true);
          setInput([]);
        } else {
          alert("틀림");
          setInput([]);
        }
        setCheckPin(false);
      }, 300);
    }
  });

  // Get 요청
  useEffect(() => {
    const fetchPinData = async () => {
      try {
        let data = await fetchPin("http://172.30.1.15:3001/apis/pin");
        console.log("data", [data[0].pin].toString().split("").map(Number));
        setConfirmPin([data[0].pin.toString().split("").map(Number)][0]);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchPinData();
  }, []);

  const handleKeyPress = (num: number | string | { img: string }) => {
    if (typeof num === "object" && num !== null && "img" in num) {
      handleRemoveNumber();
    } else {
      const newInput = [...input, num];

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

  // POST 요청
  const handleApply = async () => {
    if (input.length === 4) {
      try {
        const data = await fetchPostPin("http://172.30.1.15:3001/apis/pin", {
          pin: input,
        });
      } catch (e) {
        console.error("Error fetching data:", e);
        alert("서버 오류로 인해 PIN 번호 설정에 실패했습니다.");
      }
    } else {
      alert("PIN 번호는 4자리여야 합니다.");
    }
  };

  return (
    <St.LoginContainer>
      <St.LoginLogo src={Icon_Logo} alt="logo" />
      <St.LoginContent>
        {isCorrect
          ? "설정할 PIN 번호를 눌러주세요"
          : "현재 비밀번호를 입력해주세요"}
      </St.LoginContent>
      <St.LoginHiddenNumberBox>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Circle key={index} filled={index < input.length} />
          ))}
      </St.LoginHiddenNumberBox>
      <Keypad onKeyPress={handleKeyPress}></Keypad>
      {isCorrect ? (
        <St.ToggleButton onClick={handleApply}>적 용</St.ToggleButton>
      ) : (
        <St.ToggleButton></St.ToggleButton>
      )}

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </St.LoginContainer>
  );
};

export default ResetPin;
