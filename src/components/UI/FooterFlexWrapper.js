import React from 'react'

const FooterFlexWrapper = ({children}) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row justify-between ml-4 mr-4 md:ml-6 md:mr-6">{children}</div>
  )
}

export default FooterFlexWrapper