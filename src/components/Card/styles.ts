import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 5px;
  margin: 28px auto;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin: auto;
  flex-direction: column;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme["gray-100"]};
  }

  @media (min-width: 360px) {
    h2 {
      display: flex;
      width: 40%;
      height: 100%;

      font-size: 32px;
      margin: 20px auto;
    }
    hr {
      width: 122px;
      margin: 0;
      height: 1px;
    }
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 30px;
  padding: 25px;

  @media (min-width: 200px) {
    padding: 5px;
  }
`;
