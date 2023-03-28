import Layout from "@/components/layout";
import PageHeaderThree from "@/components/pageHeaders/pageHeader3";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <PageHeaderThree
        title="About Us"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-faq.svg"
        backgroundImageAlt="about-us"
        text=""
      />
    </Layout>
  );
};

export default AboutUs;
