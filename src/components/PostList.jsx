import React from 'react';
import Post from './Post';
import { TransitionGroup } from 'react-transition-group';
import CSSTransition from 'react-transition-group/CSSTransition';

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((item, index) =>
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="item"
          >
            <Post remove={remove} number={index + 1} item={item} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}
//1:03:28 
export default PostList;
