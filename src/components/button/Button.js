import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  const isFileDownload = href && typeof href === 'string' && href.includes('.pdf');
  
  if (isFileDownload) {
    return (
      <div className={className}>
        <a 
          className="main-button" 
          href={href}
          download="Janan_Patel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <a 
        className="main-button" 
        href={href} 
        target={newTab && "_blank"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
