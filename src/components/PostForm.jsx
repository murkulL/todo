import React from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function PostForm({create}) {

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    // setPosts([...posts, {...post, id: Date.now()}]);
    create(newPost)
    setPost({
      title: '',
      body: '',// обнуление input
    })
  }



  const [post, setPost] = React.useState({
    title: '',
    body: '',
  });

  return (
    <div>
            <form>
      {/* управляемый компонент */}
            <MyInput
            value={post.title}
            onChange={event => setPost({...post, title: event.target.value})}
            type="text"
            placeholder='Name of the posts'
            />
             {/*неуправляемый / неконтролируемый : компонент */}
            <MyInput 
            value={post.body}
            // ref={bodyInputRef}
            onChange={event => setPost({...post, body: event.target.value})}
            type="text" 
            placeholder='Decryption of the posts' 

            />
        <MyButton type='text' onClick={addNewPost} >Create post</MyButton>
        {/* <MyButton type='text' onClick={closeModal} >Close</MyButton> */}
      </form>
    </div>
  )
}

export default PostForm

