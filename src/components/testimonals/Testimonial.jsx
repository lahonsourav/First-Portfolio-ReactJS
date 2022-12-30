import React, { useEffect } from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="testimonials">
      <h5 data-aos="fade-down">Read some Slokas</h5>
      <h2>Bhagavad Gita</h2>
      <Swiper
        className="container testimonials__container"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">(द्वितीय अध्याय, श्लोक 23)</h5>
          <small className="client__review">
            नैनं छिद्रन्ति शस्त्राणि नैनं दहति पावक: । न चैनं क्लेदयन्त्यापो न
            शोषयति मारुत ॥
          </small>
          <small className="client__review__one">
            आत्मा को न शस्त्र काट सकते हैं, न आग उसे जला सकती है। न पानी उसे
            भिगो सकता है, न हवा उसे सुखा सकती है। (यहां भगवान श्रीकृष्ण ने आत्मा
            के अजर-अमर और शाश्वत होने की बात की है।)
          </small>

          <small className="client__review">swipe for more</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">(द्वितीय अध्याय, श्लोक 37)</h5>
          <small className="client__review">
            हतो वा प्राप्यसि स्वर्गम्, जित्वा वा भोक्ष्यसे महिम्। तस्मात्
            उत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चय:॥
          </small>
          <small className="client__review__one">
            यदि तुम (अर्जुन) युद्ध में वीरगति को प्राप्त होते हो तो तुम्हें
            स्वर्ग मिलेगा और यदि विजयी होते हो तो धरती का सुख को भोगोगे... इसलिए
            उठो, हे कौन्तेय (अर्जुन), और निश्चय करके युद्ध करो
          </small>
          <small className="client__review">swipe for more</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">(चतुर्थ अध्याय, श्लोक 7)</h5>
          <small className="client__review">
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:। अभ्युत्थानमधर्मस्य तदात्मानं
            सृजाम्यहम्॥
          </small>
          <small className="client__review__one">
            इस श्लोक का अर्थ है: हे भारत (अर्जुन), जब-जब धर्म ग्लानि यानी उसका
            लोप होता है और अधर्म में वृद्धि होती है, तब-तब मैं (श्रीकृष्ण) धर्म
            के अभ्युत्थान के लिए स्वयम् की रचना करता हूं अर्थात अवतार लेता हूं।
          </small>
          <small className="client__review">swipe for more</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">(चतुर्थ अध्याय, श्लोक 8)</h5>
          <small className="client__review">
            परित्राणाय साधूनाम् विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय
            सम्भवामि युगे-युगे॥
          </small>
          <small className="client__review__one">
            इस श्लोक का अर्थ है: सज्जन पुरुषों के कल्याण के लिए और दुष्कर्मियों
            के विनाश के लिए... और धर्म की स्थापना के लिए मैं (श्रीकृष्ण)
            युगों-युगों से प्रत्येक युग में जन्म लेता आया हूं।
          </small>
          <a
            className="client__review"
            href="https://www.holy-bhagavad-gita.org/"
            target="_blank"
          >
            Read Bhagavat Gita
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
