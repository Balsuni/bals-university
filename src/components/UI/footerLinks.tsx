import React from 'react'

type Props = {
  children: React.ReactNode;
};

const FooterLinks = (props: Props) => {
  return (
    <ul className="flex flex-col gap-2 text-md tracking-wider">{props.children}</ul>
  )
}

export default FooterLinks