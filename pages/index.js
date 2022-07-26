
import Post from '../components/Post'
import { SearchIcon } from '@mui/material';
import React from "react"
import NotFoundPage from '../components/NotFound'
import { useState } from 'react'
import Fuse from "fuse.js"
import { GraphQLClient, gql } from "graphql-request";
import HomePost from '../components/HomePost'
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl581q0em4rpo01t38fzadty6/master"
);
const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}
export default function Home({ posts }) {


    
     
  
      
    
 
     


  const [query,setquery]=useState("")

  const options = {
 

    keys: ['title']
  }
  // console.log(posts);
  const fuse = new Fuse(posts, options)
  
  
  const postResult = fuse.search(query) 
  //console.log(query);
 //console.log(postResult.length)
  return (
    <div>
  
 




  
    <div className="search__conantiner">
            <input className="search_input" placeholder="Search... "  value={query} onChange={Event => setquery(Event.target.value)} type="text" />
         {/* <SearchIcon/>      */}
        </div>
      
  {/* <input value="fgzf"  onChange={(e)=>setq(e.target.value)}/> */}
      <div className='posts'>
        {
        

        query ?
        
        postResult.length!==0?postResult.map((post, index) => (
          <Post key={index} post={post} />
        )):
      <NotFoundPage/>
        
        :
        posts.map((post) => (
          <HomePost key={post?.id} post={post} />
        ))
       
        
        }
     {
       typeof window !=="undefined" && document?.querySelector('.button_container')?.addEventListener("click",()=>{
       
        document.documentElement.scrollTop=0
    
        
      })
     }
      
      </div>
     
   
    </div>
  )
}

