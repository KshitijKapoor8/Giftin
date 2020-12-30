import React, { useState } from "react";
import homebg from "../assets/homebg.jpg";
import {
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import otherhomebg from '../assets/otherhomebg.jpg';

import Navbar from '../components/navbar';

export default function Home(props) {
 

  return (
    <Navbar renderContent = {renderContent()}/>
  );
}

function renderContent()
{
    return(
      <div>
        <MDBView src={homebg} style = {{justifyContent: 'center',  alignItems: 'center', width: '100%', height: '100%'}}>
            <MDBMask className="flex-center" >
              <p className="white-text" style={{fontSize: 50, paddingRight: '35%', paddingBottom: '8%'}}>make gifting easy</p>
            </MDBMask>
        </MDBView>

        <main >
          <div style = {{display: 'flex'}}>


          <div style = {{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <div style = {{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <h3>give in the season of giving.</h3>
              <h5 style = {{paddingLeft: '1rem'}}><strong>giftin'</strong> allows you to wishlist and purchase products,</h5>
              <h5>so you can focus on what's right.</h5>
            </div>

          </div>
            <div style = {{flex: 1,}}>
              <MDBView src={otherhomebg}> </MDBView>
            </div>
          </div>
          
        </main>
      </div>
        
    );
}



