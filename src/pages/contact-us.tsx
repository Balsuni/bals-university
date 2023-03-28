import Layout from "@/components/layout";
import PageHeaderText from "@/components/pageHeaders/pageHeader-text";
import React from "react";

const ContactUs = () => {
  return (
    <Layout>
      <PageHeaderText
        title="Contact Us"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-contact.svg"
        backgroundImageAlt="contact-us"
        text="Any question or remarks? Just write us a message!"
      />
    </Layout>
  );
};

export default ContactUs;
