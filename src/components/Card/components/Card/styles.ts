import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;

  width: 320px;
  height: 350px;
  padding: 10px;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 18px;
  background-color: ${(props) => props.theme["gray-400"]};
  &.expanded {
    height: 100%;
  }
  @media (min-width: 200px) {
    width: 100%;
    height: auto;
    margin: 0;
  }

  @media (min-width: 400px) {
    width: 300px;
    height: 250px;
  }
  @media (min-width: 710px) {
    width: 320px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    height: 390px;
    min-height: 390px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  background-color: ${(props) => props.theme["gray-700"]};
`;
export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.h5`
  display: flex;

  align-items: center;
  justify-content: left;
  font-size: 18px;
  color: ${(props) => props.theme["gray-900"]};
  margin: 15px auto;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-900"]};
`;

export const Description = styled.p`
  position: relative;

  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: blue;
    cursor: pointer;
  }
  .button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  margin-top: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    border-radius: 8px;
    width: 200px;
    height: 40px;
    color: blue;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    background-color: ${(props) => props.theme["gray-500"]};
  
  }
  button:hover {
    background-color: ${(props) => props.theme["gray-100"]};
 
  }
`;
