import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

const SettingModal: React.FC<ModalProps> = ({ closeModal, isOpen }) => {
  const [AhPreset, setAhPreset] = useState<number>(12);
  const [capacity, setCapacity] = useState<number>(24);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("http://172.30.1.15:3001/apis/setting/", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setAhPreset(data[0].set_remain_ah);
      setCapacity(data[0].set_remain_percent);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch("http://172.30.1.15:3001/apis/setting/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ah: AhPreset, percent: capacity }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const handleAh = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newAh: number = parseInt(e.target.value, 10);

    if (isNaN(newAh)) {
      alert("숫자만 입력이 가능합니다.");
    } else {
      setAhPreset(newAh);
    }
  };

  const handleCapacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newCapacity: number = parseInt(e.target.value, 10);

    if (isNaN(newCapacity)) {
      alert("숫자만 입력이 가능합니다.");
    } else {
      setCapacity(newCapacity);
    }
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postData();
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalForm onSubmit={handleOnSubmit}>
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalContents>
              <div>
                <ModalName>Ah preset</ModalName>
                <InputNumber
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  type="number"
                  value={AhPreset}
                  onChange={handleAh}
                />{" "}
                Ah
              </div>
              <div>
                <ModalName>Battery Capacity</ModalName>
                <InputNumber
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  type="number"
                  value={capacity}
                  onChange={handleCapacity}
                />{" "}
                %
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
              >
                <ModalCloseButton type="submit">적 용</ModalCloseButton>
                <ModalCloseButton onClick={closeModal}>닫 기</ModalCloseButton>
              </div>
            </ModalContents>
          </ModalBox>
        </ModalOverlay>
      </ModalForm>
    </ModalContainer>
  );
};

export default SettingModal;

const ModalContainer = styled.div`
  height: 600px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    height: 400px;
  }
`;

const ModalForm = styled.form`
  border: none;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  width: 500px;
  height: 550px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 250px;
    height: 300px;
    border-radius: 10px;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  gap: 40px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    margin-top: 20px;
    gap: 30px;
  }
`;

const ModalName = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1rem;
  }
`;

const ModalCloseButton = styled.button`
  width: 130px;
  height: 50px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.orange};
  border-radius: 30px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 30px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 80px;
    height: 30px;
    border-radius: 30px;
    font-size: 0.8rem;
    margin-top: 10px;
  }
`;

const InputNumber = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  color: white;
  margin-top: 30px;
  font-size: 1.3rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1rem;
  }
`;
