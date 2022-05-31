import React from 'react'
import { PostsStyle } from './InternsElements';
import Internn from '../Internn';
import { useState } from 'react';
import { SearchButton, SearchCard, SearchInput } from '../StudentProgram/StudentProgramElements';


const Interns = ({posts}) => {
    console.log(posts);
    const[searchw, setSearch] = useState("");
  return (
    <>
    <SearchCard>
         <SearchInput type="text" onChange = {(e)=>setSearch(e.target.value)} placeholder="Search..."></SearchInput>
         <SearchButton><i class="fa fa-search"></i></SearchButton>
     </SearchCard>
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