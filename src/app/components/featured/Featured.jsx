import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hello There!</b> Discover interesting posts and stories
            </h1>
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className={styles.postDesc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime consequatur, explicabo debitis praesentium nulla 
                            similique quam quis ipsa, maiores ratione itaque, corporis ea? 
                            Eveniet obcaecati id asperiores inventore, in ut!
                        </p>
                        <button className={styles.button}>Read More</button>
                    </div>
                </div>
        </div>
    )
}

export default Featured