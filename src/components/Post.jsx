import{ format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  function handleCreateNewComment() {
    event.preventDefault();
    console.log(comments);
    setComments([...comments, comments.length + 1]);
    console.log(comments);
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  
            src={author.avatarUrl} 
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph')
            return <p>{line.content}</p>;
          else if(line.type === 'link')
            return <p><a href="#">{line.content}</a></p>
        })}
        <p> 
          <a href='#'>#noCajuNoCall</a>
          <a href="#">#giveMeMyMoney</a>
          <a href="#">#timeIsMoney</a>
        </p>
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        event.prevent
        <strong>Deixe seu feedback</strong>
        
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  )
}