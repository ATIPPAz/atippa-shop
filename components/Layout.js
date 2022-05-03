import React from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";


const Body = styled.div`

`

const BodyContrainer = styled.div`padding:0px 200px;`
function DefaultLayout({children}) {
  
  return (
    
    <>
    {/* <style jsx global>
{`
body {
  margin:0;
  padding:0;}`
}
</style> */}
      <Body>
        <BodyContrainer>
          {children}
        </BodyContrainer>
      </Body>
    </>
  );
}

export default DefaultLayout;