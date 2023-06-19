import React, { useEffect } from "react";
import * as S from "./styles";
import { useState } from "react";
import { Modal } from "../../../Modal";
import postsFetch from "../../../../services/axios";

export interface DataProps {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface CommentProps {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export const Card = () => {
  const [cards, setCards] = useState<Array<DataProps>>([]);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [comments, setComments] = useState<Array<CommentProps>>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await postsFetch.get("/posts");
      const data = response.data;

      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async (postId: string) => {
    try {
      const response = await postsFetch.get(`/posts/${postId}/comments`);
      const data = response.data;

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReadMore = (cardId: string) => {
    if (cardId === expandedCardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  const toggleModal = async (postId: string) => {
    if (modalOpen) {
      setModalOpen(false);
      setComments([]);
    } else {
      await fetchComments(postId);
      setModalOpen(true);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      {cards &&
        cards.map((card) => {
          const isExpanded = card.id === expandedCardId;
          return (
            <S.ContainerCard
              key={card.id}
              className={isExpanded ? "expanded" : ""}
            >
              <S.ContainerBox>
                <S.Title>{card.title} </S.Title>
              </S.ContainerBox>
              <S.ContainerDescription>
                <S.Description>
                  {isExpanded
                    ? card.body
                    : `${card.body.substring(0, 100)}.....`}
                  <button
                    className="botao"
                    onClick={() => toggleReadMore(card.id)}
                  >
                    {isExpanded ? "ver menos" : "ver mais"}
                  </button>
                </S.Description>
              </S.ContainerDescription>
              <S.ContainerButton>
                <button type="button" onClick={() => toggleModal(card.id)}>
                  Ver Comentários
                </button>
              </S.ContainerButton>
            </S.ContainerCard>
          );
        })}
      {modalOpen && <Modal comments={comments} toggleModal={toggleModal} />}
    </>
  );
};
