import React from "react";

function ViewBlogContent({ content }) {
    return (
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div 
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-black dark:text-gray-400 reset-html"
        />
      </div>
    );

}

export default ViewBlogContent;
