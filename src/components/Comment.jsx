import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'

export function Comment() {
  return (
    <div className={style.Comment}>
      <Avatar hasBorder={false} src="https://github.com/caiohmg.png" alt="" />

      <div className={style.CommentBox}>
        <div className={style.CommentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Caio Henrique</strong>
              <time title="11 de Dezembro ás 22:00h" dateTime="2022-12-19 22:03:03">
          Cerca de 1 hora atrás
        </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          
          <p>Muito bom Dever, parabêns!! 👏👏</p>
        </div>

        <footer>
          <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}