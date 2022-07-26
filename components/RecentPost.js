import * as React from 'react';
import Link from "next/link"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions} from '@mui/material';
import { GraphQLClient, gql } from "graphql-request";
import { useState,useEffect } from 'react';
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl581q0em4rpo01t38fzadty6/master"
);
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        coverPhoto {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await graphcms.request( query);

  return result.posts;
};

export default function RecentPost() {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => {
      setRelatedPosts(result);
    }).catch(err=>{console.log(err)})

  
  }, [])
  return (
    <>
     {/* <h4>Recent Post</h4> */}
    {/* {console.log(relatedPosts)} */}
    {relatedPosts.map((relatedPost,index)=>(
     

<Link key={index}  href={`/blog/${relatedPost?.slug}`} passHref>
<Card className='card' sx={{ maxWidth: 350 }}>
<CardActionArea className='card__area'>
{console.log(relatedPost)}
  <CardContent className='card__content'>
    <Avatar className='avatar' src={`${relatedPost.coverPhoto.url}`}/>
    <Typography gutterBottom variant="h6" component="div">
      {relatedPost.title}
    </Typography>
    
  </CardContent>
</CardActionArea>
<CardActions>
  
</CardActions>
</Card>

</Link>
    ))}
   
    </>
  );
}
