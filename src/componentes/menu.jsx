import { Link } from 'react-router'
import s from './menu.module.css'

export const Menu = () => {
    return(
        
            <nav className={s.menu}>
            <Link to="/">Home</Link>
            <Link to="/charts">Gráficos</Link>
            <Link to="/">Produtos</Link>
            <Link to="/">Contatos</Link>
        </nav>
        )
}