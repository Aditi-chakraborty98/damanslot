import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './global.css';

const Invite = () => {
  return (
    <div id="box">
      <div><h5 id="headdd">Invite</h5></div>
      <div><h6 id="headdd">Please swipe left- right to choose your favourite poster</h6></div>
      <Carousel style={{ backgroundColor: 'white' }}>
        <Carousel.Item>
          <div id="img1"></div>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div id="img1"></div>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div id="img1"></div>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      
      <br />
      <div><h5 id="headdd">Invite friends    Income 10 billion Commision</h5></div>

      
      <button className="btn btn-primary custom-button" id="btn "style={{ width: '400px', backgroundColor: '#FF5733',  }}>
        Invite Link
      </button>    </div>
  );
};

export default Invite;
