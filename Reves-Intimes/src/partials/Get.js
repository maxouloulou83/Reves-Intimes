import React from 'react';

import Slider from "react-slick";
import Fade from "react-reveal/Fade";

import GetCard from "../components/GetCard";
import Warning from "../components/svgr/for-less-than-icons/img6";
import Dollar from "../components/svgr/for-less-than-icons/img3";
import Pad from "../components/svgr/for-less-than-icons/img5";
import Book from "../components/svgr/for-less-than-icons/img2";
import Hourglass from "../components/svgr/for-less-than-icons/img4";
import Bell from "../components/svgr/for-less-than-icons/img1";
import Marie from "../components/svgr/for-less-than-icons/img7";
import Poog from "../components/svgr/for-less-than-icons/img8";

const Get = (props) => {
    const { id = null } = props;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative bg-gradient-to-r from-red-400 to-blue-600 mx-auto mx-4 pt-12 z-50" id={id}>
            <Fade>
                <h1 id="Get"
                    className="flex justify-center text-3xl font-extrabold text-gray-50 tracking-tight sm:text-4xl">
                    Lingerie femme
                </h1>
            </Fade>
            <Fade>
                <div className="mt-4">

                    <Slider
                        {...settings}
                    >

                        <GetCard svg={<Warning />}
                                 title=""
                        />

                        <GetCard svg={<Dollar />}
                                 title=""
                        />

                        <GetCard svg={<Pad />}
                                 title=""
                        />

                        <GetCard svg={<Book />}
                                 title=""
                        />

                        <GetCard svg={<Hourglass />}
                                 title=""
                        />

                        <GetCard svg={<Bell />}

                        />

                        <GetCard svg={<Marie />}

                        />

                        <GetCard svg={<Poog />}

                        />

                    </Slider>
                </div>
            </Fade>

        </div>
    );
}

export default Get;