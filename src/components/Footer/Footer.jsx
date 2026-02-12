import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"

export default function Footer() {

    return (
        
        <footer>
      
<div>
    <img src={logo} alt="Logo da Connect" />
    <h2>Connect</h2>
</div>

<p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>

<nav className={styles.navFooter}>
<img src={whatsapp} alt="Logo do Whatsapp" />
<img src={instagram} alt="Logo do Instagram" />
<img src={linkedin} alt="Logo do Linkedin" />
</nav>
        </footer>
    )

}