import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import logo from '../../../public/image/Logo.jpg'
export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p style={{fontSize:'30px'}}>
          Welcom Admin

        </p>
        <div>
         
            By{' '}
            <Image
              src={logo}
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
      
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/Admin_page/add_product"
          className={styles.card}
        >
          <h2>
          products <span>-&gt;</span>
          </h2>
          <p>Find product and searsh and creete product</p>
        </Link>

        <Link
          href="/Admin_page/User-acount"
          className={styles.card}
        >
          <h2>
            user <span>-&gt;</span>
          </h2>
          <p>creet a new user and new admin!</p>
        </Link>

        <Link
          href="/Admin_page/Chart_comonde"
          className={styles.card}
        >
          <h2>
            charts <span>-&gt;</span>
          </h2>
          <p>find a analyse your busnice</p>
        </Link>

        <Link
          href="/Admin_page/detelse_comonde"
          className={styles.card}
        
        >
          <h2>
           Notification <span>-&gt;</span>
          </h2>
          <p>
            find a shoping your client
          </p>
        </Link>
      </div>
    </main>
  )
}
