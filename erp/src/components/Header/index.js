import React from 'react'
import { HeaderStyle,HeaderImage,HeaderTitleLg,Small,HeaderTitles,
    HeaderTitleL1g,HeaderTitleL2g, HeaderBtnWrapper, HeaderButton, HeaderButton1 } from './HeaderElements'
import headerImage from '../../images/header.jpg';
const Header = () => {
  return (
   <>
   
   <HeaderStyle/>
   <HeaderTitles>
    <Small>Dare to</Small> 
    <HeaderTitleLg>Dream Big!</HeaderTitleLg> 
    <HeaderTitleL2g>#endless opportunities</HeaderTitleL2g>
    <HeaderTitleL1g><b>Start Your Career at Intada</b></HeaderTitleL1g>
    <HeaderBtnWrapper>
        <HeaderButton
        to=""
        >See Job openings
        </HeaderButton>

        <HeaderButton1
        to="/sudentprogram"
        >See Our Student Opportunities
        </HeaderButton1>
    </HeaderBtnWrapper>
   </HeaderTitles>
   <HeaderImage src={headerImage}/> 
   </>
  )
}

export default Header