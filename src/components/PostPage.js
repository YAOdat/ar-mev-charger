import React from 'react';
import './glass.css';
import { useParams } from 'react-router-dom';
import { blogPosts } from './data/productdata';
import {useColorMode} from "@chakra-ui/react";
import { Helmet } from 'react-helmet';


function PostPage() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);
  const { colorMode } = useColorMode();


  const replaceYouTubeLinks = (content) => {
    const youtubeLinkRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/g;
    const embeddedPlayerTemplate = '<iframe width="560" height="315" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe>';
    const wbLink = '<a href="https://ar.mevcharger.com/products/1" target="_blank" rel="noopener noreferrer" style="color: #54c43d;" >الشاحن المنزلي</a>';
    const portableLink = '<a href="https://ar.mevcharger.com/products/2" target="_blank" rel="noopener noreferrer" style="color: #54c43d;" >الشاحن المتنقل</a>';
    const paragraphs = content.split('\n'); // Split the content into paragraphs
  
    const transformedContent = paragraphs.map((paragraph, index) => {
      const replacedContent = paragraph.replace(youtubeLinkRegex, embeddedPlayerTemplate).replace(/الشاحن المنزلي/g, wbLink).replace(/الشاحن المتنقل/g, portableLink);
      return `<p key="${index}">${replacedContent}</p>`; // Wrap each paragraph in <p> tags
    });
  
    return transformedContent.join('<br/>'); // Join the paragraphs back into a single string
  };

  return (
    <> 
    <Helmet> 
    <title>{post.title}</title>
    <meta name="description" content={post.description} />
    <meta name="keywords" content={post.tags.join('، ')} />
    </Helmet>
    <article className="glass-body" id={`glass-body-${colorMode}`} dir='rtl'>
    <div className="card" id={`card-${colorMode}`}>
      <a href="#">
        <h1 className="card-title" id={`card-title-${colorMode}`}>{post.title}</h1>
      </a>
      <div id={`card-content-${colorMode}`} dangerouslySetInnerHTML={{ __html: replaceYouTubeLinks(post.content) }}></div>
      <img src={post.contentImageUrl} alt={post.imageAlt? post.imageAlt : post.title} />
      <div className="blog-post-author-container">
        <br></br>
        {post.author && <h3>Written by: {post.author}</h3>}
        <h3>Published on: {post.date}</h3>
        <h3 className="blog-post-tags">Tags: {post.tags.join('، ')}</h3>
        {post.category && <h3>Category: {post.category}</h3>}
      </div>
    </div>
  </article>
  </>
  );
}

export default PostPage;