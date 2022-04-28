import React from 'react';
import Router from './Router/router';
import GlobalState from "./Global/globalState";
import styled from 'styled-components';

const Div = styled.div`
background-image:url(https://i.pinimg.com/originals/f6/a1/8a/f6a18ac56651ce4f9ca7e0230706a0b6.png);
height: 150rem;
margin-bottom: 0;`




function App() {
  return (
    <Div> 
      <GlobalState>
        <Router />
      </GlobalState>
    </Div>
  );
}

export default App;
