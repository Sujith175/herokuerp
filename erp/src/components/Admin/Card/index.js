import React from 'react'
import { IoStatsChart} from "react-icons/io5";
import {GiReceiveMoney } from 'react-icons/gi';
import {MdOutlineManageAccounts} from 'react-icons/md';
import { EarningsCard, CardContent, Chart, EarningsText, Earning, EarningsIncrease } from './CardComponent';
import { NavBtnLink } from '../../Navbar/NavbarElements';
const Card = () => {
  return (
    <>
    <EarningsCard>
        <CardContent>
            <Chart>
                <IoStatsChart/>
            </Chart>
            <EarningsText>Manange Carrers</EarningsText>
            <Earning>E-Recruitement</Earning>
            <br></br>
            <br></br>
           
             <NavBtnLink to="/managejobhome">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    <EarningsCard>
        <CardContent>
            <Chart>
                <GiReceiveMoney/>
            </Chart>
            <EarningsText>Manage Payroll</EarningsText>
            <Earning>Employee Details, Leave, Payroll</Earning>
            <br></br>
             <NavBtnLink to="/managecarrers">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>

    <EarningsCard>
        <CardContent>
            <Chart>
                <MdOutlineManageAccounts/>
            </Chart>
            <EarningsText>Manage Project</EarningsText>
            <Earning>Agile Methodology</Earning>
            <br></br>
            <br></br>
             <NavBtnLink to="/managecareers">Enter</NavBtnLink>
            
        </CardContent>
    </EarningsCard>
    </>
  )
}

export default Card;