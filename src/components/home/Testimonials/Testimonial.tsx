import React from "react";
import styles from "./Testimonial.module.sass";

interface ITestimonial {
  name: string;
  comments: string;
  image: string;
}

const Testimonial = ({ name, comments, image }: ITestimonial) => {
  return (
    <div className={styles.card}>
      <div className={styles.profilePic}>
        <img src={image} />
      </div>
      <div className={styles.text}>
        <p className={styles.comment}>{comments}</p>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
