import { useState } from "react";
//import './ItemCounter.css'
import styles from './ItemCounter.module.css'
interface Props {
    nameProduct: string,
    quantity: number | undefined
}
export const ItemCounter = ({ nameProduct, quantity = 1 }: Props) => {

    //Aquí van los hooks
    //Esto es local del componente
    const [count, setCount] = useState(quantity)
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSubstract = () => {
        if (count === 1) return;
        setCount(count - 1);

    }

    // const handleClick = () => {
    //     console.log(`Click en ${nameProduct}`)
    // }


    return (
        <section className={styles.itemRow} >
            <span className={styles['item-text']} style={{

                color: count === 1 ? 'red' : 'black'
            }}
            >
                {nameProduct}
            </span>

            <button
                onClick={handleSubstract}
            >-1</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+1</button>
        </section>
    )
}
