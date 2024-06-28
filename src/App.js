import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { Chat } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="appBody">
          <Sidebar/>


              <Routes>
                <Route path='/room/:roomId'>
                skibidi
                {/* <Chat/> */}
                </Route>

                <Route path="/">
                Welcome           b nn b n.m nmnbv  vmbhnvbmnjg,  fvchk vmn, vhmj,n vhmn vnm nvv nbm vbnm  vbg,hkbn mj'klo ihupihbhipbfnbjhkvx      
                </Route>

              </Routes>
        {/* react-router -> chat screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;