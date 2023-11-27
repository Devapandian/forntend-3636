import React from 'react';
import Header from './Header';

const Shop = () => {
  return (
    <div>
      <Header />
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url("https://angular.pixelstrap.com/multikart/landing/assets/images/landing-page/home.jpg")',
          height: '93vh',
          width: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
        className="main-img responsive-img pt-0"
      >
                    <div
              style={{
                visibility: 'visible',
                animationName: 'zoomIn',
                transform: 'translateX(2.81333%) translateY(2.08%)',
                left: '8%',
              }}
              className="decor-1 decor wow zoomIn"
              id="img-1"
            >
              <img
                src="https://angular.pixelstrap.com/multikart/landing/assets/images/landing-page/slider/3.png"
                alt=""
                style={{
                  visibility: 'visible',
                  animationName: 'zoomIn',
                  transform: 'translateX(5.76%) translateY(2.14%)',
                  width:"210px",
                  marginLeft:"20px",

                }}
                className="img-fluid blur-up lazyloaded"
              />
            </div>
        <div
          style={{
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
            paddingBottom:"220px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '93vh',
          }}
          className="container-fluid"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '93vh',
              width: '100%',
            }}
            className="main-contain"
          >
            <div>
              <h1 style={{ color: "red", display: "block", letterSpacing: "0.03em", fontSize: "30px", paddingLeft: "110px", lineHeight: "1.5", fontWeight: "bold", fontFamily: "sans-serif" }} className="m-0">
                MULTI
                <span style={{ color: "black" }}>SHOP</span>
              </h1>&nbsp;
              <h3 style={{ color: "black" }} className="m-0">
                The
                &nbsp;<span style={{ color: "red" }}>BEST SELLING</span>&nbsp;
                Minimal Theme
              </h3>&nbsp;
              &nbsp;
              <img src="https://angular.pixelstrap.com/multikart/landing/assets/images/landing-page/text.png" alt="" style={{ paddingLeft: "90px", paddingTop: "38px" }} className="img-fluid" />
              <div style={{ paddingLeft: "110px" }} className="mt-4">
                <a target="_blank" className="btn btn-primary m-0 d-inline-block">
                  Front-End
                </a>
                &nbsp;
                <a target="_blank" className="btn btn-secondary d-inline-block ml-3">
                  Front-End
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
            }}
            className="home-decor"
          >

            <div
              style={{
                visibility: 'visible',
                animationName: 'zoomIn',
                transform: 'translateX(2.81333%) translateY(2.08%)',
                marginLeft: '300%', 
                width:"190px",
                animationDuration: '1s', 
                animationTimingFunction: 'ease', 
                animationIterationCount: 'infinite', 
              }}
              className="decor-2 decor wow zoomIn"
              id="img-2"
            >
              <img
                src="https://angular.pixelstrap.com/multikart/landing/assets/images/landing-page/slider/2.png"
                alt=""
                className="img-fluid blur-up lazyloaded"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
