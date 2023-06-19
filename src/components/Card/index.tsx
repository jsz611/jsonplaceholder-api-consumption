import React from "react";
import { Card } from "./components/Card/Card";
import * as S from "./styles";

const Cards = () => {
  return (
    <S.Container>
      <S.Header>
        <h2>
          Posts
          <hr />
        </h2>
      </S.Header>
      <S.ContainerCard>
        <Card />
      </S.ContainerCard>
    </S.Container>
  );
};

export default Cards;
