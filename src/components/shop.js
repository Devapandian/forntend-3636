import React from 'react';
import Header from './Header';
// import "./"

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
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
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
              <h1 className="m-0">
                MULTI
                <span>SHOP</span>
              </h1>
              <h3 className="m-0">
                The
                <span>BEST SELLING</span>
                Minimal Theme
              </h3>
              <img src="assets/images/landing-page/text.png" alt="" className="img-fluid" />
              <div className="mt-4">
                <a target="_blank" className="btn btn-primary m-0 d-inline-block">
                  Front-End
                </a>
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
            {/* Repeat the following block for each decor element */}
            <div
              style={{
                visibility: 'visible',
                animationName: 'zoomIn',
                transform: 'translateX(2.81333%) translateY(2.08%)',
                top: '11%',
                left: '8%',
              }}
              className="decor-1 decor wow zoomIn"
              id="img-1"
            >
              <img src="assets/images/landing-page/slider/1.png" alt="" className="img-fluid blur-up lazyloaded" />
            </div>
            <div
              style={{
                visibility: 'visible',
                animationName: 'zoomIn',
                transform: 'translateX(2.81333%) translateY(2.08%)',
                top: '11%',
                left: '8%',
              }}
              className="decor-1 decor wow zoomIn"
              id="img-1"
            >
              <img src="assets/images/landing-page/slider/1.png" alt="" className="img-fluid blur-up lazyloaded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
