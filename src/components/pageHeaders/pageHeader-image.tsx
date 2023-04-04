import React from "react";
import styles from "../../styles/pageHeaderImage.module.scss";

type Props = {
  text: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  rightImageSrc: string;
  rightImageAlt: string;
};

// x sm: md: lg: xl:

const PageHeaderImage = (props: Props) => {
  return (
    <div>
      <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
        <img
          className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay bg-darkblue-500"
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt}
        />
        <div className="w-screen flex flex-col md:flex-row items-center md:items-start md:justify- px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-8 lg:py-12 xl:py-10  ">
          <div className="w-screen flex flex-col items-center md:items-start py-10 sm:py-10 md:py-[70px] lg:py-16 xl:py-20">
            <h1 className={styles.text3}>{props.text}</h1>
            <h1 className={styles.text2}>{props.text}</h1>
            <h1 className={styles.text1}>{props.text}</h1>
          </div>
          <img
            src={props.rightImageSrc}
            alt={props.rightImageAlt}
            className="mt-0 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0, w-48 md:w-[270px] lg:w-7h-72 xl:w-80, h-48 md:h-[270px] lg:h-72 xl:h-80  "
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeaderImage;
