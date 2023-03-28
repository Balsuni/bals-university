import Layout from "@/components/layout";
import PageHeaderThree from "@/components/pageHeaders/pageHeader3";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <PageHeaderThree
        title="About Us"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog.svg"
        backgroundImageAlt="about-us"
        header="Unleash your potential and rule the digital space!"
        parag1="An E-learning platform specially made for you and Africans who
        want to rule the digital space with practical knowledge."
        parag2=" Over 5000 number of people have achieved 5000+ results."
      />
    </Layout>
  );
};

export default AboutUs;
