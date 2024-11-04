import './Footer.css';
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';


function Footer() {
  const isIndex = true;
  return (
    <div className="Footer">

      <div className="App-footer">
        
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>

      </div>

    </div>    
  );
}

export default Footer;
