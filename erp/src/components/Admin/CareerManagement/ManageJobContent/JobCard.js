import React from 'react'
import { EarningsCard } from './JobCardComponents'
import { CardContent, Chart, EarningsText, Earning } from '../../Card/CardComponent';
import { NavBtnLink } from '../../Card/CardComponent';
const JobCard = () => {
  return (
    <>
     <EarningsCard>
        <CardContent>
            <Chart>
                
            </Chart>
            <EarningsText>Add new Job</EarningsText>
            <Earning></Earning>
            <br></br>
            <br></br>
           
             <NavBtnLink to="/adminaddjob">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    <EarningsCard>
        <CardContent>
            <Chart>
                
            </Chart>
            <EarningsText>Edit Existing Jobs</EarningsText>
            <Earning></Earning>
            <br></br>
             <NavBtnLink to="/adminviewjob">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    <EarningsCard>
        <CardContent>
            <Chart>
                
            </Chart>
            <EarningsText>Manage Applications</EarningsText>
            <Earning></Earning>
            <br></br>
             <NavBtnLink to="/viewapplicatioins">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    <EarningsCard>
        <CardContent>
            <Chart>
                
            </Chart>
            <EarningsText>Manage Internship</EarningsText>
            <Earning></Earning>
            <br></br>
             <NavBtnLink to="/adminintern">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    </>
  )
}

export default JobCard