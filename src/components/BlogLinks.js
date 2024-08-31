import React from 'react';
import { Box, Grid, Typography, Link, Card, CardMedia, CardContent } from '@mui/material';

const BlogLinks = () => {
  const blogs = [
    {
      title: 'Blog Post 1',
      imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
      link: '/blog-post-1',
    },
    {
      title: 'Blog Post 2',
      imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
      link: '/blog-post-2',
    },
    {
      title: 'Blog Post 3',
      imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
      link: '/blog-post-3',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={blog.title}
                height="200"
                image={blog.imageUrl}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Link href={blog.link} variant="body2" underline="hover">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogLinks;
