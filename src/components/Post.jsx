import{ format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    'Hello, it\'s me'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments([commentsWithoutDeleteOne]);
  }

  function handleNewCommentInvalid() {
    console.log(event)
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>;
          else if(line.type === 'link')
            return <p key={line.content}><a href="#">{line.content}</a></p>
        })}
        <p> 
          <a href='#'>#noCajuNoCall</a>
          <a href="#">#giveMeMyMoney</a>
          <a href="#">#timeIsMoney</a>
        </p>
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea
          name='comment'
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
           type="submit"
           disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content = {comment}
              onDeleteComment = {deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}