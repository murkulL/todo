import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


function PostFilter({ filter, setFilter }) {
  return (
    <div>
    <MyInput 
    input={filter.query}
    onChange={event => setFilter({...filter, query: event.target.value})}
    placeholder='Search'
    />

   
        <MySelect
          value={filter.sorting}
          onChange={selectedSort => setFilter({...filter, sorting: selectedSort})}
          defaultValue="Sorting"
          options={[
            {value: 'title', name: 'Sort on Title'},
            {value: 'body', name: 'Sort on Description'}
          ]}
        />
    </div>
  )
}

export default PostFilter