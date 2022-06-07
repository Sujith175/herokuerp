import React from 'react'
import {Button} from '../ButtonElement';
import Img1 from '../../images/img2.svg';
import Img2 from '../../images/img3.svg';

import { InfoContainer,
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine,
     Heading, 
     SubTitle, 
     BtnWrap,
     Img,
     Column2,
     ImgWrap
    } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
headLine, darkText, description, buttonLabel, img, 
alt, primary, dark, dark2}) => {
  return (
    <>
<InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                    <Button to='/aboutus'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
        </InfoRow>
    </InfoWrapper>
</InfoContainer>
    </>
  );
};

export default InfoSection;