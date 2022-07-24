import Link from 'next/link'

export default function Post({ post }) {

//console.log(post);
  return (
<Link  href={`/blog/${post?.slug}`}>
    <div className='card'>
      <img className='card__image' src={post?.coverPhoto?.url} alt='' />
      {/* <img className='card__image' src="https://source.unsplash.com/600x400/?computer" alt='' /> */}
<div className="card__footer">

      <h3 className='card__title'>{post?.item.title}</h3>
      <div className='post-date'>{post?.item.datePublished}</div>

              
      {/* <p>{post?.frontmatter?.excerpt}</p> */}
      <p className='card__excerpt'>Lorem ipsum dolor sit amet, consectetur adipisicdavrhtwrh...<a href={'/blog/${post?.slug}'}>Read more</a>
      </p>
     
      </div>


    </div>
    
    
    </Link>
  )
}
