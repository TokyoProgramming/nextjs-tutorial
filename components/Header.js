import headerStyles from '../styles/Header.module.css';

import React from 'react';

const Header = () => {
  //   const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>webDev</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to date with ...</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
