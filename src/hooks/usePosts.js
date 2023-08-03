import React from "react";

export const useSortedPosts = (posts, sorting) => {

  const sortedPosts = React.useMemo(() => {
    if (sorting) {
      return [...posts].sort((a, b) => a[sorting].localeCompare(b[sorting]))
    }
    return posts;
  }, [sorting, posts])
  return sortedPosts

}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  const sortedAndSearchPosts = React.useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  },[query, sortedPosts])

  return sortedAndSearchPosts;
}