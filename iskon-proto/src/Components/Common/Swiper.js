import React, { Component } from "react";
import "./Swiper.css";

class Swiper extends Component {

    render() {

        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })


        return (

            <div class="swiper-container">
                {/* Additional required wrapper */}

                <div class="swiper-wrapper">
                    {/* <!-- Slides -->  */}
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
        ...
    </div>
                {/* <!-- If we need pagination --> */}
                <div class="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                {/* <!-- If we need scrollbar --> */}
                <div class="swiper-scrollbar"></div>
            </div>
        )

    }

}

export default Swiper;