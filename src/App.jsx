import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import style from "./app.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
        <Post
            author="Caio Henrique"
            content={[
              { tipo: "parágrafo", conteúdo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." }
            ]}
          />

          <Post author="Henrique Moraes" content={[{ tipo: "parágrafo", conteúdo: "Muito bom!!!." }]} />
        </main>
      </div>
    </div>
  );
}
