import { Product } from 'utils/productsArray'

type Props = { product: Product; productCount: number }
const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <>
            {product.title}: {productCount}
        </>
    )
}
export default CartProductListItem
