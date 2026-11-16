import s from './menu.module.css'

export const menu = () => {
    return(
        
            <nav className={s.menu}>
            <a href="">Home</a>
            <a href="">Instituição</a>
            <a href="">Produtos</a>
            <a href="">Contatos</a>
        </nav>
        )
}