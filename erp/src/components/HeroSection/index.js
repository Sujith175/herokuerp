import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer,Herobg, VideoBg, HeroContent, HeroH1, HeroP, 
    HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';    
const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
  return (
    <HeroContainer id="home">
        <Herobg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> 
        </Herobg>
    <HeroContent>
        <HeroH1>Smarter World Better Solutions</HeroH1>
        <HeroP>Together We Can</HeroP>
         <HeroBtnWrapper>
            <Button to="/register" onMouseOver={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            >Get Started With Us {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroBtnWrapper> 
    </HeroContent>
    </HeroContainer>


  )
}

export default HeroSection;