import React from 'react'

type Props = {
  children: React.ReactNode;
};

const FooterFlexWrapper = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row justify-between ml-4 mr-4 md:ml-6 md:mr-6">{props.children}</div>
  )
}

export default FooterFlexWrapper