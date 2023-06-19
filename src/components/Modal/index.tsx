import React from "react";
import * as S from "./styled";
export const Modal = ({ comments, toggleModal }) => {
  return (
    <S.ModalOverlay>
      <S.Modal>
        <S.CloseButton onClick={() => toggleModal("")}>X</S.CloseButton>
        <S.ModalTitle>Comentários</S.ModalTitle>
        <S.ModalContent>
          {comments.map((comment) => (
            <S.Comment key={comment.id}>
              <S.CommentName>{comment.name}</S.CommentName>
              <S.CommentEmail>{comment.email}</S.CommentEmail>
              <S.CommentBody>{comment.body}</S.CommentBody>
            </S.Comment>
          ))}
        </S.ModalContent>
      </S.Modal>
    </S.ModalOverlay>
  );
};
