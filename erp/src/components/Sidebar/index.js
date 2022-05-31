import React from 'react'
import { SidebarContainer,Icon,CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
<SidebarWrapper>
<SidebarMenu>
<SidebarLink to="/home" onClick={toggle}>
Home
</SidebarLink>
<SidebarLink to="/services" onClick={toggle}>
Services
</SidebarLink>
<SidebarLink to="/careers" onClick={toggle}>
Careers
</SidebarLink>
<SidebarLink to="/about" onClick={toggle}>
About
</SidebarLink>
</SidebarMenu>
<SideBtnWrap>
    <SidebarRoute to="/login">SignIn</SidebarRoute>
</SideBtnWrap>
</SidebarWrapper>
</SidebarContainer>

    </>
  )
}

export default Sidebar