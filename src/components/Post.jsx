import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.Post}>
      <header>
        <div className={style.author}>
          <Avatar src="https://github.com/caiohmg.png" />
          <div className={style.authorInfo}>
            <strong>Caio Henrique</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Dezembro ás 22:00h" dateTime="2022-12-19 22:03:03">
          Publicado há 1 hora
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 <a href=""> caio.design/doctorcare</a> </p>
        <p> <a href=""> #novoprojeto</a>{' '}
         <a href="">#nlw</a>{' '}
         <a href="">#rocketseat</a>
         </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button></footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
