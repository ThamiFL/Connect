import styles from "./Inicio.module.scss";
import ImgInicial from "../../assets/img-tela-inicial.png";

export default function Inicio() {
  return (
    <section className={styles.sectionDoInicio}>

      <div className={styles.divDoIninio}>

        <h1 className={styles.titulo}> Projetos Sociais <p> que transformam </p></h1>
        <p className={styles.paragrafo}>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>

      </div>

      <img className={styles.ImgInicial} src={ImgInicial} alt="Foto de duas mãos segurando um globo" />

    </section>
  );
}
