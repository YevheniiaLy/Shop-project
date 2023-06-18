import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-features">
                        Price for one item: {product.price}
                    </div>
                    <div className="product-features">Count:{productCount}</div>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
