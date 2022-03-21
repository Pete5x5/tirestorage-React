import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>tirestorage</title>
        <meta property="og:title" content="tirestorage" />
      </Helmet>
      <header data-role="Header" className={styles['Header']}>
        <div className={styles['Container1']}>
          <img
            alt="image"
            src="/playground_assets/220321-132854001-chrome-1500h.png"
            className={projectStyles['logo1']}
          />
        </div>
        <span className={projectStyles['headerPhone']}>
          <span>(905) 555-5555</span>
        </span>
        <a
          href="mailto:info@tirestorage.space?subject="
          className={` ${styles['link']} ${projectStyles['headerEmail']} `}
        >
          <span>info@tirestorage.space</span>
        </a>
        <div className={styles['BtnGroup']}>
          <button className={projectStyles['button']}>Dealer Login</button>
        </div>
        <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className={styles['MobileMenu']}>
          <nav className={styles['Nav']}>
            <div className={styles['Container2']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image1']}
              />
              <div
                data-type="CloseMobileMenu"
                className={styles['CloseMobileMenu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['Banner']}>
        <h1 className={styles['text03']}>150,000 sqft of convenient storage</h1>
      </div>
      <div className={styles['Stats']}>
        <div className={styles['Stat']}>
          <svg viewBox="0 0 1024 1024" className={projectStyles['icon1']}>
            <path d="M644 342v-86q0-54-39-93t-93-39-93 39-39 93v86h264zM512 726q34 0 60-26t26-60-26-60-60-26-60 26-26 60 26 60 60 26zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42z"></path>
          </svg>
          <span className={projectStyles['iconTitle']}>Secure</span>
          <span className={projectStyles['iconText']}>
            and climate controlled.
          </span>
        </div>
        <div className={styles['Stat1']}>
          <svg
            viewBox="0 0 1024 1024"
            className={` ${styles['icon12']} ${projectStyles['icon1']} `}
          >
            <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <span
            className={` ${styles['text06']} ${projectStyles['iconTitle']} `}
          >
            Easy
          </span>
          <span
            className={` ${styles['text07']} ${projectStyles['iconText']} `}
          >
            convenient web interface
          </span>
        </div>
        <div className={styles['Stat2']}>
          <svg
            viewBox="0 0 1024 1024"
            className={` ${styles['icon14']} ${projectStyles['icon1']} `}
          >
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span
            className={` ${styles['text08']} ${projectStyles['iconTitle']} `}
          >
            Local
          </span>
          <span
            className={` ${styles['text09']} ${projectStyles['iconText']} `}
          >
            fast pickup and delivery
          </span>
        </div>
        <div className={styles['Stat3']}>
          <svg
            viewBox="0 0 1024 1024"
            className={` ${styles['icon16']} ${projectStyles['icon1']} `}
          >
            <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h468q50 0 62 42z"></path>
          </svg>
          <span
            className={` ${styles['text10']} ${projectStyles['iconTitle']} `}
          >
            Rush Delivery
          </span>
          <span
            className={` ${styles['text11']} ${projectStyles['iconText']} `}
          >
            available upon request
          </span>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <img
          alt="logo"
          src="/playground_assets/220321-132854001-chrome-1500h.png"
          className={styles['image2']}
        />
        <span className={styles['text12']}>
          © 2021 teleportHQ, All Rights Reserved.
        </span>
        <div className={styles['Contact']}>
          <span>
            <span>
              20 Myler St.,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Hamilton, ON</span>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
