import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <ModalContents>
            <div>관리자 문의</div>
            <div>010-0000-0000</div>
            <ModalCloseButton onClick={closeModal}>닫 기</ModalCloseButton>
          </ModalContents>
        </ModalBox>
      </ModalOverlay>
    </>
  );
};
export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  width: 500px;
  height: 300px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 250px;
    height: 200px;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: ${(props) => props.theme.colors.white};
    margin: 35px 0;
    font-size: 1.2rem;
    @media screen and (min-width: 375px) and (max-width: 400px) {
      margin: 20px 0;
      font-size: 0.9rem;
    }
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
    font-size: 0.8rem;
    margin-top: 40px;
  }
`;
