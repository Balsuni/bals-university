import React from "react";
import styles from "../../styles/pageHeaderText.module.scss";

type Props = {
  title: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  text: string;
};

// x sm: md: lg: xl:

const PageHeaderText = (props: Props) => {
  return (
    <div>
      <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
        <img
          className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt}
        />
        <div className="w-screen flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-10 md:gap-8 md:items-start md:justify-center px-0 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36  ">
          <div className="w-screen flex flex-col items-center md:items-start  ">
            <h1 className={styles.title3}>{props.title}</h1>
            <h1 className={styles.title2}>{props.title}</h1>
            <h1 className={styles.title1}>{props.title}</h1>
          </div>
          <div className=" border-[3px] border-white w-screen md:w-[1700px]  ml-10 md:ml-0 mr-10 xl:mr-24">
            <h1 className="text-lg text-white text-center w-full py-5 flex items-center justify-center ">
              {props.text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderText;
