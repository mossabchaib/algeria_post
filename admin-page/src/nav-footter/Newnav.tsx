



import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';
import CartNav from './CartNav';
// components/Navbar.js

import styles from './stylee.module.css'; // Import the CSS module

const { SITE_NAME } = process.env;

export default async function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.block} ${styles.flexNone} md-${styles.hidden}`}>
        <MobileMenu  />
      </div>
      <div className={`${styles.flex} ${styles.wFull} md-${styles.w1_3}`}>
        <Link href="/" className={`${styles.mr2} ${styles.flex} ${styles.wFull} ${styles.itemsCenter} ${styles.justifyCenter} md-${styles.wAuto} lg-${styles.mr6}`}>
          hi
          <div className={`${styles.ml2} ${styles.flexNone} ${styles.textSm} ${styles.fontMedium} ${styles.uppercase} md-${styles.hidden} lg-${styles.block}`}>
            {SITE_NAME}
          </div>
        </Link>
      
          <ul className={`${styles.hidden} ${styles.gap6} ${styles.textSm} md-${styles.flex} md-${styles.itemsCenter}`}>
           
              <li >
                <Link
                  href='/'
                  className={`${styles.textNeutral500} ${styles.underlineOffset4} ${styles.hoverTextBlack} ${styles.hoverUnderline} ${styles.darkTextNeutral400} ${styles.darkHoverTextNeutral300}`}
                >
                 jj
                </Link>
              </li>
         
          </ul>
    
      </div>
      <div className={`${styles.hidden} ${styles.justifyCenter} md-${styles.flex} md-${styles.w1_3}`}>
        <Search />
      </div>
      <div className={`${styles.flex} ${styles.justifyEnd} md-${styles.w1_3}`}>
      l
      </div>
    </nav>
  );
}
