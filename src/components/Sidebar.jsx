import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.Sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/caiohmg.png" />
        <strong>Caio Henrique</strong>

        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
