import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { HeaderNav } from "../Navbar/HeaderNav";
import styles from "./Dashboard.module.css";
import { ArrowLeftsvg, Dirctionsvg } from "./svg";
import demo from "./assets/demo.png";

type Props = {};

export const Dashboard = (_props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Adjust this based on the total number of slides you have

  const handleLeftArrowClick = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleRightArrowClick = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className={styles.DashboardWrapper}>
      <HeaderNav title="Dashboard" />
      <div className={styles.dasboardSliderWrapper}>
        <div className={styles.LeftArrow} onClick={handleLeftArrowClick}>
          <ArrowLeftsvg />
        </div>
        <div className={styles.CardsWrapper}>
          <div
            className={styles.IndividualCards}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={demo} alt="" />
            <div className={styles.content}>
              <div>
                <h4>Thrissur Parking</h4>
                <div className={styles.RateWrap}>
                  <p>Pay : 30/hr</p>
                  <p>5/50</p>
                </div>
              </div>
              <a href="">
                <Dirctionsvg />
              </a>
            </div>
          </div>
          <div
            className={styles.IndividualCards}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            Slide 2
          </div>
          <div
            className={styles.IndividualCards}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            Slide 3
          </div>
        </div>
        <div className={styles.RightArrow} onClick={handleRightArrowClick}>
          <ArrowLeftsvg />
        </div>
      </div>
      <div className={styles.MApWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7114276054135!2d76.22642621137412!3d10.523379689567179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efb472915953%3A0x480319a6bed517f8!2sNirmalamatha%20Central%20School!5e0!3m2!1sen!2sin!4v1701978527986!5m2!1sen!2sin"
        
          style={{ border: "0" }} // Note the change here
          allowFullScreen={true} // Changed to camelCase
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Changed to camelCase
        ></iframe>
      </div>
      <a href="/schedule">Book Slot</a>
      <Navbar />
    </div>
  );
};
