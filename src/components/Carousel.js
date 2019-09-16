import React from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";

import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBMask} from
    "mdbreact";


const Carousel = () => {


  return (
    <div>
      <h2>Streams</h2>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
        >
          <MDBCarouselInner>

{/*            <MDBCarouselItem itemId="1">
              <MDBView>
                <video id="background-video" loop autoPlay muted>
                  <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
                <MDBMask overlay="black-strong"/>
              </MDBView>
            </MDBCarouselItem>*/}

            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong"/>

              </MDBView>
            </MDBCarouselItem>



            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong"/>

              </MDBView>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-strong"/>

              </MDBView>
            </MDBCarouselItem>

          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      </div>
        );
        };

        export default Carousel;