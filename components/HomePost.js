import Link from 'next/link'
import {useRouter} from "next/router"

export default function HomePost({ post }) {
//   const Router = new useRouter();
// Router.push('/blog/[slug]', `/bolg/${post.slug}`);
//console.log(post);
  return (
    <Link  href={`/blog/${post?.slug}`}>
    <div className='card'>
      {/* <img className='card__image' src={post?.coverPhoto?.url} alt='' /> */}
      <img className='card__image' src="https://source.unsplash.com/600x400/?computer" alt='' />
<div className="card__footer">

      <h3 className='card__title'>{post?.title}</h3>
      <div className='post-date'>{post?.datePublished}</div>

              
      {/* <p>{post?.frontmatter?.excerpt}</p> */}
      <p className='card__excerpt'>Lorem ipsum dolor sit amet, consectetur adipisicdavrhtwrh...<a href={'/blog/${post?.slug}'}>Read more</a>
      </p>
     
      </div>


    </div>
    
    
    </Link>
  )
}
