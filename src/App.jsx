import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>#noCajuNoCall</h1>
      <Post 
        author= 'Wagner Moreira'
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ullam magni numquam omnis ipsa soluta molestias animi velit praesentium, facere iure cupiditate laudantium maxime beatae, esse sit? Officiis, repellendus atque?"
      />
      <Post
        author='Wagneriano'
        content='#noCajuNoCall'
      />
    </>
  )
}
