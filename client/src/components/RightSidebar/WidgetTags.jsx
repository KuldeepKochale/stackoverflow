import React from 'react'

const WidgetTags = () => {
  
  const tags = ['c','javascript','php','css','express','firebase', 'html', 'java', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'python', 'reactjs']

  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags