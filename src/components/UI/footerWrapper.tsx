import React from "react";

type Props = {
  children: React.ReactNode;
};

const FooterWrapper = (props: Props) => {
  return (
    <footer className="bg-darkblue-500 relative bottom-0 w-screen h-auto py-10">
      {props.children}
    </footer>
  );
};

export default FooterWrapper;
