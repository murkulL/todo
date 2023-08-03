import React, { useState } from 'react';
import './styles/App.scss';
import './components/Counter.jsx';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import CheckPost from './components/UI/checkofposts/CheckPost'
import PostFilter from './components/PostFilter';
import MyModal from './components/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import MyLoader from './components/UI/loader/MyLoader';

function App() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = useState({sorting: '', query: ''});
  const [checkModal, setCheckModal] = React.useState(false);
    //свой hook/usePosts.js 
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = React.useState(false);

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false)
  };

  React.useEffect(() => {
    fetchPosts();
  },[]);

  const creactPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // callback - получаем post из дочернего компонента 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  
  const checkModalWindow = (modal) => {
    if(modal){
      return  false
    };
    return true
  };

  return (
    <div className='App'>
      <MyModal
        checkModal={checkModal}
        setCheckModal={() => setCheckModal(checkModalWindow(checkModal))}
      >
        <PostForm create={creactPost}/> 
      </MyModal>
      
      <hr style={{margin: '20px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MyButton onClick={() => {setCheckModal(true)}}>Add post</MyButton>
      {isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>  : sortedAndSearchPosts.length  
      ? 
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='List of Post' />  
      : 
      <CheckPost/>}
      
    </div>
  );
}

export default App;


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/murkulL/todo.git
git push -u origin main