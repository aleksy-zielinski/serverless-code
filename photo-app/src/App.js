import React, { useState } from 'react';
import { Radio } from 'antd'
import { withAuthenticator } from 'aws-amplify-react'
import Posts from './Posts'
import CreatePost from './CreatePost'

function App() {
  const [viewState, updateViewState] = useState('viewPosts')

  return (
    <div style={container}>
      <h1>Photo App</h1>
      <Radio.Group value={viewState} onChange={e => updateViewState(e.target.value)}>
        <Radio.Button value="viewPosts">View Photos</Radio.Button>
        <Radio.Button value="addPhoto">Add Photo</Radio.Button>
      </Radio.Group>
      {
        viewState === 'viewPosts' ? (
          <Posts />
        ) : (
          <CreatePost updateViewState={updateViewState} />
        )
      }
    </div>
  );
}

const container = { width: 500, margin: '0 auto', padding: 50 }

export default withAuthenticator(App);
