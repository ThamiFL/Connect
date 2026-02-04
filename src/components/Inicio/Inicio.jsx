import styles from "./Inicio.module.scss";
import ImgInicial from "../../assets/img-tela-inicial.png"

export default function Inicio() {
  return (
    <section className={styles.sectionDoInicio}>
      <h1> Projetos Sociais que transformam </h1>
      <p>
        Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos
        mudanças reais na comunidade.
      </p>
      <img className={styles.ImgInicial} src={ImgInicial} alt="" />
    </section>
  );
}
