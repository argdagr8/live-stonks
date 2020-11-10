import React from "react";
import styled from "styled-components";

const StyledStock = styled.div`
  height: 150px;
  width: 260px;
  padding: 18px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 25px;
  font-weight: 700;
`;

const StockList = ({ name }) => {
  return (
    <StyledStock>
      <p>{name}</p>
    </StyledStock>
  );
};

export default StockList;
