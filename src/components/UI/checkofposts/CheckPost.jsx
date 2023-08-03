import React from 'react'
import styles from "./CheckPosts.module.scss"

function CheckPosts(props) {

  return (
    <h1 className={styles.text}>{`No posts found ...   ¯|_(ツ)_/¯`}</h1>
  )
}

export default CheckPosts
