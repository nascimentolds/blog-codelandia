import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './posts.json';

function App() {
  const [posts, setPosts] = useState(data);

  function handleLike(id) {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        return post.id === id ? { ...post, isLiked: !post.isLiked } : post;
      });
    });
  }

  const allPosts = posts.map(item => (
    <Card key={item.id} data={item} toggleLike={handleLike} />
  ));

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        {allPosts}
      </main>
    </div>
  );
}

export default App;
