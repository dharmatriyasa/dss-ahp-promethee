import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { systemwork } from '../../data/systemwork';

import css from './styles.module.scss';
import { useState } from 'react';

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const systemWorks = systemwork;
    console.log({...systemWorks});

    return (
        <div className={`${css.content} pt-14`}>
          <h1 className='nunito font-bold text-3xl text-center mb-8'>Cara Kerja Sistem</h1>
            <Slider ref={setSliderRef} {...sliderSettings}>
                {systemWorks.map((systemWork, index) => {
                    return(
                        <div key={index} className={css.card}>
                            <h2 className={css.textInfo}>{systemWork.title}</h2>
                            <img className={css.cardImage} src={`/images/${systemWork.imageUrl}.png`} alt={systemWork.imageUrl} width={100} height={100}/>
                            <p>{systemWork.description}</p>
                        </div>
                    )
                })}
            </Slider>
            <div className={`${css.controls} mt-4`}>
              <button onClick={sliderRef?.slickPrev}>
                <FaChevronLeft />
              </button>
              <button onClick={sliderRef?.slickNext}>
                <FaChevronRight />
              </button>
            </div>
        </div>
      //   <div>
      //   <h2> Single Item</h2>
      //   <Slider {...settings}>
      //     <div>
      //       <h3>1</h3>
      //     </div>
      //     <div>
      //       <h3>2</h3>
      //     </div>
      //     <div>
      //       <h3>3</h3>
      //     </div>
      //     <div>
      //       <h3>4</h3>
      //     </div>
      //     <div>
      //       <h3>5</h3>
      //     </div>
      //     <div>
      //       <h3>6</h3>
      //     </div>
      //   </Slider>
      // </div>
    );
}
 
export default Carousel;