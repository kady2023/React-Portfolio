import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/aniket-kumar-161b9b189/',
      name: 'Aniket Kumar',
      role: 'USICT | Top 7% @leetcode | Web Developer | Problem Solver | C++ | React.js',
      test: 'As a developer and a problem solver, I think Nitin is a great collaborative partner to have. I met Nitin in some basic javascript & react projects and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/nidhi-rathore-431317213/',
      name: 'Nidhi Rathore',
      role: 'Secretary @USS ACM | USICT\'24 | Aspiring SDE',
      test: "It was a pleasure collaborating with Nitin on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/akashdeep-varshney-63b6a7233/',
      name: 'Akashdeep Varshney',
      role: 'Full Stack Developer| SIH Finalist\'22 | Problem Solving Enthusiast | Undergrad at USICT ',
      test: 'I worked with Nitin in the same team and his communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because He\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/ritik-ranaut-09361a1ba/',
      name: 'Ritik Ranaut',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Nitin some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/vikas-kumar-aggarwal-14bb851b1/',
      name: 'Vikas Kumar Aggarwal',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Nitin has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials