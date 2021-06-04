import React from "react";
import Recharts from "../components/charts/Recharts";
import Chartjs from "../components/charts/Chartjs";
import styled from "@emotion/styled";
export default function Home() {
  return (
    <_Home>
      <Title>Charts</Title>
      <Recharts />
      <Chartjs />
      <Recharts />
    </_Home>
  );
}

const _Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background: #f1f1f1;
`;

const Title = styled.div`
  margin: 0;
  padding: 60px 0 0;
  font-weight: 700;
  font-size: 70px;
  text-align: center;
  width: 300px;
  border: none;
  &:focus {
    outline: none;
  }
  font-family: sans-serif;
  border-bottom: 4px double #8e8e8e;
`;
