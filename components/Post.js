import Link from 'next/link'

export default function Post({ post }) {


  return (
    <div className='card'>
      <img src={post?.item?.frontmatter?.cover_image} alt='' />
      <div className='post-date'>Posted on {post?.item?.frontmatter?.date}</div>

      <h3>{post?.item?.frontmatter?.title}</h3>

      <p>{post?.item?.frontmatter?.excerpt}</p>


      <Link href={`/blog/${post?.item?.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
