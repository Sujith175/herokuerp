import React from 'react'
import { HeaderStyle,HeaderImage,HeaderTitles,
 HeaderBtnWrapper, HeaderButton, HeaderButton1 } from './PageHeaderElements';
import headerImage from '../../images/header.jpg';
const PageHeader = () => {
  return (
   <>
   <HeaderStyle/>
<HeaderImage src={headerImage}/>  
   </>
  )
}

export default PageHeader