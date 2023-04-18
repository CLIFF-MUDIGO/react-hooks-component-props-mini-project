import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './Articlelist';

console.log(blogData);

const App = () => {
  const blogImage = "https://example.com/blog-logo.jpg"; 
  const blogAbout = "Welcome to my blog! This is a blog about web development and programming."; 
  const { blogName, posts } = blogData; 

  return (
    <div>
      <Header blogName={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;