interface Props {
    nameProduct: string,
    quantity: number | undefined
}
export const ItemCounter = ({ nameProduct, quantity }: Props) => {

    const handleClick = () => {
        console.log(`Click en ${nameProduct}`)
    }
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}
        >
            <span style={{
                width: 150,
            }}
            >
                {nameProduct}
            </span>

            <button
                onClick={handleClick}
            >+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}
