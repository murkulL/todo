import React from 'react';
import MyButton from './UI/button/MyButton';


const Post = (props) => {
  // const [item, setItem] = React.useState('')
  // console.log(props)

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.number}. {props.item.title}</strong>
        <div className='statement'>{props.item.body}</div>
      </div>
      <h1>{props.value}</h1>
      <div className='post__btn'>
        <MyButton onClick={() => props.remove(props.item)}>Delete</MyButton>
      </div>
    </div>
  )
}

export default Post;