import React from 'react';
import Router from './Router/router';
import GlobalState from "./Global/globalState";
import styled from 'styled-components';

const Div = styled.div`
background-color: #26330c;
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
