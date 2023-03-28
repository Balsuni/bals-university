import Layout from "@/components/layout";
import PageHeaderText from "@/components/pageHeaders/pageHeader-text";
import React from "react";

const FAQ = () => {
  return (
    <Layout>
      <PageHeaderText
        text=" Frequently Asked Questions"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-faq.svg"
        backgroundImageAlt="faqs"
        title="FAQ"
      />
    </Layout>
  );
};

export default FAQ;
