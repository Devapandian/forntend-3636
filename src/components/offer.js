import React from 'react'
import Header from "./Header";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



const offer = () => {
    return (
        <div>
            <Header />
            <section
                style={{
                    position: 'relative',
                    backgroundImage: 'url("https://angular.pixelstrap.com/multikart/landing/assets/images/landing-page/email-bg.png")',
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
                        paddingRight: '10px',
                        paddingLeft: '1px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: "150px",
                        paddingBottom: '20px',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        height: '93vh',
                    }}
                    className="container-fluid"
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'left',
                            height: '93vh',
                            paddingLeft: "30px",
                            width: '100%',
                        }}
                        className="main-contain"
                    >
                        <div>
                            <h1 style={{ color: "black", letterSpacing: "0.03em", fontSize: "30px", lineHeight: "1.5", fontWeight: "bold", fontFamily: "sans-serif" }} className="m-0">
                                Fully optimized & customizable<br />shop samples, visually bold <br />design & beautiful effects
                            </h1>&nbsp;
                            <div style={{ paddingRight: "110px", fontSize: "16px" }} className="mt-4">
                                <span>Get your readers familiar with your business featured<br /> projects and achievements.</span>
                            </div>&nbsp;
                            <Link to="/signup">
                                <Button style={{ background: "orange", marginTop: "20px" }}>Get Started</Button>
                            </Link>

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
                                marginLeft: '180%',
                                marginBottom: "220px",
                                width: "390px",
                                animationDuration: '1s',
                                animationTimingFunction: 'ease',
                                animationIterationCount: 'infinite',
                            }}
                            className="decor-2 decor wow zoomIn"
                            id="img-2"
                        >
                            <img
                                src="https://reactdemo.hasthemes.com/flone/p2/img/revoulation/brook-landing-slider-03-slide-02-image-01.png"
                                alt=""
                                className="img-fluid blur-up lazyloaded"
                            />
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default offer