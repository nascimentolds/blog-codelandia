import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import data from './posts.json'

function App() {
  const [posts, setPosts] = useState(data)

  
  const allPosts = posts.map(item => (
    <Card key={item.id} data={item} />
  ))

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        {allPosts}
      </main>
    </div>
  )
}

export default App
