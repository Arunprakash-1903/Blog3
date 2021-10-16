import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import NotFoundPage from '../components/NotFound'
import { useState,useEffect } from 'react'
import Fuse from "fuse.js"
import HomePost from '../components/HomePost'

export default function Home({ posts }) {


    
     
  
      
     
 
     


  const [query,setQuery]=useState("")
  const options = {
 

    keys: ['frontmatter.title','frontmatter.excerpt']
  }
  
  const fuse = new Fuse(posts, options)
  
  
  const postResult = fuse.search(query) 

 
  return (
    <div>
      <Head>
        <title>Abd Blogs</title>
     
      </Head>
  
    <div className="search__conantiner">
            <input className="search_input" placeholder="Search... "  value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
                 
        </div>
      
  
      <div className='posts'>
        {
        

        query ?
        
        postResult.length!==0?postResult.map((post, index) => (
          <Post key={index} post={post} />
        )):
      <NotFoundPage/>
        
        :
        posts.map((post, index) => (
          <HomePost key={index} post={post} />
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

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
