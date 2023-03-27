import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log('deletar');
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((stateLikeCount) => {
      return stateLikeCount + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/wagnermor.png"
      />
      <div className={ styles.commentBox }>
        <div className={ styles.commentContent }>
          <header>
            <div className={ styles.authorAndTime }>
              <strong>Wagner Moreira</strong>
              <time title="11 de Maio às 08:13h" dateTime="2023-03-23 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}