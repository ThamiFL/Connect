import styles from "./Perfil.module.scss";
import perfil from "../../assets/fotodeperfil.png";

export default function Perfil() {
  return (
    <section className={styles.secPerfil}>
      <h1> Thamires Brito </h1>
      <h2> </h2>
      <p>
           Apaixonado por fazer a diferença na comunidade. Acredito que pequenas
        ações podem transformar vidas e estou sempre em busca de novas
        oportunidades para ajudar.
      </p>
      <address> </address>

      <ul className={styles.linksPerfil}>
        <li>Educação</li>
        <li>Meio Ambiente</li>
        <li>Assistência Social</li>
        <li>Design</li>
      </ul>

      <img className={styles.imagemPerfil} src={perfil} alt="" />
    </section>
  );
}
