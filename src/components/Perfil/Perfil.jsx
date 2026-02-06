import styles from "./Perfil.module.scss";
import perfil from "../../assets/fotodeperfil.png";

export default function Perfil() {
  return (
    <section className={styles.secPerfil}>
      <article className={styles.articleperfil}>
        <img className={styles.imagemPerfil} src={perfil} alt="" />
        <div className={styles.divperfil}>
          <h1 className={styles.h1perfil}> Thamires Brito </h1>
          <h3 className={styles.h3}> Voluntária Ativo</h3>
          <p className={styles.p1}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <address>
            <p>São Gonçalo, RJ</p>
            <p>thamifl29@gmail.com </p>
            <p>Membro desde Janeiro 2022 </p>
          </address>

          <ul className={styles.linksPerfil}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
