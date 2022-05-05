import React from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
const Container = styled.div`
max-width: 1472px;
margin: 0 auto;`
function DefaultLayout({children}) {
  
  return (
    <Container>
          {children}
    </Container>
  );
}

export default DefaultLayout;