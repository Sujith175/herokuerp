import React from 'react'
import { PostsStyle } from './InternsElements';
import Internn from '../Internn';
import { useState } from 'react';
import { SearchCard, SearchInput } from '../StudentProgram/StudentProgramElements';
import { InternTitle } from '../InternshipList/internshiplistElements';
import { MarginSetterNav } from '../Carrers/CarrerElements';

const Interns = ({posts}) => {
    console.log(posts);
    const[searchw, setSearch] = useState("");
  return (
    <>
    <SearchCard>
         <SearchInput style={{color:"black"}} type="text" onChange = {(e)=>setSearch(e.target.value)} placeholder="Search..."></SearchInput>

     </SearchCard>
     <InternTitle>Our Internship Program for Students</InternTitle>
     <MarginSetterNav/>
    <PostsStyle>
    {
         posts.filter((value)=>{
          if(searchw===''){ 
            return value;
          }
          else if(value.name.toString().toLowerCase().includes(searchw.toString().toLowerCase())){
            return value;
          }
         return false;
        }).map((p) => (
            <Internn post = {p}/>
            
        ))
    }
    </PostsStyle>
    </>
  )
}

export default Interns;