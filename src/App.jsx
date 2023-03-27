import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/loiane.png',
      name: 'Loiane Groner',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 🤟' },
      { type: 'paragraph', content:'Acabei de subir mais um curso no loiane.traing' },
      { type: 'link', content: 'loiane.training' }
    ],
    publishedAt: new Date('2023-03-24 16:48:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/akitaonrails.png',
      name: 'Fabio Akita',
      role: 'Codeminer 42 co-founder'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 🤟 👊' },
      { type: 'paragraph', content:'Acabei de subir mais um vídeo no youtube, cola lá.' },
      { type: 'link', content: 'akitaonrails.com' }
    ],
    publishedAt: new Date('2023-03-20 16:39:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
