import React from 'react'
import './Footer.css';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="Footer">
      <div className="copyright">Joseph Paul Copyright {currentYear}</div>
      <div className="links">
        <a href="https://example.com/link1">Link 1</a>
        <a href="https://example.com/link2">Link 2</a>
        <a href="https://example.com/link3">Link 3</a>
      </div>
    </div>
  );
}

export default Footer