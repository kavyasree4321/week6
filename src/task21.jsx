import React from 'react';

const task21 = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default task21;

import React from 'react';
import Task21 from './task21';

const task21= () => {
  return (
    <div className="App">
      <BlogPost 
        title="My First Blog Post" 
        content="This is the content of my first blog post." 
        author="John Doe" 
      />
      <BlogPost 
        title="Another Blog Post" 
        content="Here is some more content for another post." 
        author="Jane Smith" 
      />
    </div>
  );
};

export default task21


