import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../layouts/Layout";
import { Beer } from "../components/Beer.js";
import styled from "styled-components";
import { LoadingContext, retrieveSingle } from "../../lib/loading.api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80vh;
  padding: 40px;
  margin: 50px auto 0;
  @media (max-width: 768px) {
  }
`;

export const SingleBeer = props => {
  const [beer, setBeer] = useState();
  const { setLoading } = useContext(LoadingContext);
  const { id } = props.match.params;

  useEffect(() => {
    //console.log("single beer page effect");
    setLoading(true);
    retrieveSingle(id).then(data => {
      setLoading(false);
      setBeer(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container>{beer && <Beer {...beer}></Beer>}</Container>
    </Layout>
  );
};
