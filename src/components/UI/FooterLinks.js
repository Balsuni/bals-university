import React from 'react'

const FooterLinks = ({children}) => {
  return (
    <ul className="flex flex-col gap-2 text-md tracking-wider">{children}</ul>
  )
}

export default FooterLinks