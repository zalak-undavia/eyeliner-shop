import React from "react";

import "./Testimonials.css";

const testimonials = [
  {
    username: "makeup_guru_91",
    testimonial:
      "This eyeliner is amazing! It glides on smoothly and lasts all day without smudging.",
    date: "2024-07-15",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    username: "beauty_queen_88",
    testimonial:
      "I love the precision of this eyeliner. It's perfect for creating sharp, defined lines.",
    date: "2024-07-18",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    username: "glam_goddess",
    testimonial: "The color payoff is incredible! My eyes pop every time I use this eyeliner.",
    date: "2024-07-20",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    username: "makeup_maven",
    testimonial:
      "This eyeliner is a game-changer. It's waterproof and stays put even on the hottest days.",
    date: "2024-07-22",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    username: "beauty_blogger",
    testimonial: "I can't believe how easy this eyeliner is to apply. It's perfect for beginners.",
    date: "2024-07-25",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    username: "cosmetic_enthusiast",
    testimonial: "The formula is so creamy and smooth. It doesn't tug on my eyelids at all.",
    date: "2024-07-27",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    username: "makeup_artist",
    testimonial:
      "This eyeliner is perfect for creating bold, dramatic looks. I use it on all my clients.",
    date: "2024-07-28",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    username: "beauty_junkie",
    testimonial: "I love the variety of colors available. There's a shade for every occasion.",
    date: "2024-07-29",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    username: "makeup_addict",
    testimonial: "This eyeliner is so long-lasting. It doesn't budge even after a long day.",
    date: "2024-07-30",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    username: "beauty_guru",
    testimonial: "The packaging is so sleek and stylish. I love showing it off on my vanity.",
    date: "2024-07-30",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const TestimonialCard = ({ username, testimonial, date, avatar }) => (
  <div className="testimonial-card">
    <img src={avatar} alt={`${username}'s avatar`} className="avatar" />
    <div className="testimonial-content">
      <h3>{username}</h3>
      <p>{testimonial}</p>
      <small>{date}</small>
    </div>
  </div>
);

const TestimonialsList = () => (
  <div className="testimonials-list">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </div>
);

export default TestimonialsList;
