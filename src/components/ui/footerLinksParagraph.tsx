import React from 'react'

type Props = {
  children: React.ReactNode;
};

const FooterLinksParagraph = (props: Props) => {
  return (
    <p className="font-semibold text-xl tracking-wider mb-5">{props.children}</p>
  )
}

export default FooterLinksParagraph