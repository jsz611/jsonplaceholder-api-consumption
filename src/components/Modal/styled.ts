import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme["gray-300"]};

  border-radius: 8px;
  position: relative;
  z-index: 1000;
  padding: 16px;
  margin: 10px;

  @media (min-width: 600px) {
    width: 400px;
  }
  @media (min-width: 600px) {
    width: 800px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 16px;
  font-weight: 900;
  color: ${(props) => props.theme["gray-800"]};
`;

export const ModalContent = styled.div`
  overflow-y: auto;
  height: 300px;
`;

export const Comment = styled.div`
  margin-bottom: 16px;
`;

export const CommentName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 800;
  color: ${(props) => props.theme["gray-600"]};
`;

export const CommentEmail = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["gray-600"]};
  margin-bottom: 8px;
  font-weight: 600;
`;

export const CommentBody = styled.p`
  font-size: 16px;
  font-weight: 900;
  color: ${(props) => props.theme["gray-500"]};
`;
