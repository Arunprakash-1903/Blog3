

import Link from 'next/link'
import Head from 'next/head'
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl581q0em4rpo01t38fzadty6/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  console.log(posts.map((post) => ({ params: { slug: post.slug } })));
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}
export default function PostPage({
 post
}) {
//console.log(post);
  return (
    <>
    <Head>

      <title>Dev Blogs</title>
    </Head>
      
      <div className='card card-page'>
        <h1 className='post-title'>{post.title}</h1>
        <div className='post-date'>Posted on {post.datePublished}</div>
        <img src={post.coverPhoto.url} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </div>
      </div>
    </>
  )
}


