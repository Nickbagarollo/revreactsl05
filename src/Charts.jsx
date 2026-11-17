import { useState } from 'react'
import s from './Charts.module.css'
import { Menu } from './componentes/menu'
import { BarChart2 } from './componentes/barChart'



function Charts(){
    const [show, setShow] = useState("")


    return(
        <>
            <Menu/>
        <div className={s.wrapCharts}>
            <div className={s.wrapBtns}>
                <button className={s.btnChart} onClick={() => (setShow("barra"))}>Gráfico Barra</button>
                <button className={s.btnChart} onClick={() => (setShow("pizza"))}>Gráfico Pizza</button>
                <button className={s.btnChart} onClick={() => (setShow("linha"))}>Gráfico Linha</button>
            </div>
            {show === "barra" && <BarChart2/>}
            {show === "pizza" && <h1>pizza</h1> }
            {show === "linha" && <h1>linha</h1> }



        </div>
        </>
    )
}

 export default Charts