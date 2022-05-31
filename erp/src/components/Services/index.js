import React from 'react'
import Icon1 from '../../images/service 1.svg';
import Icon2 from '../../images/service 2.svg';
import Icon3 from '../../images/service 3.svg';

import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,
   ServiceIcon, ServicesH2 } from './ServicesElements';
const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>

            <ServicesCard>
              <ServiceIcon src={Icon1}/>
              <ServicesH2>Security System Solutions</ServicesH2>
              {/* <ServicesP>lorum ipsum pola mende</ServicesP> */}
            </ServicesCard>

            <ServicesCard>
            <ServiceIcon src={Icon2}/>
              <ServicesH2>Services In Branding & Designing</ServicesH2>
              {/* <ServicesP>lorum ipsum pola mende</ServicesP> */}
            </ServicesCard>

            <ServicesCard>
            <ServiceIcon src={Icon3}/>
              <ServicesH2>Strategic & Operations Solutions</ServicesH2>
              {/* <ServicesP>lorum ipsum pola mende</ServicesP> */}
            </ServicesCard>

          
           
            
        </ServicesWrapper>
    </ServicesContainer>
    
    </>
  );
};

export default Services;