import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}
type State = {
    count: number
}
class ProductListItem extends React.Component<Props, State> {
    state = {
        count: 1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => {
            const newCount =
                prevState.count + 1 <= 10
                    ? prevState.count + 1
                    : prevState.count
            return {
                count: newCount,
            }
        })
    }

    onDecrementClick = () => {
        this.setState((prevState) => {
            const newCount =
                prevState.count - 1 >= 1 ? prevState.count - 1 : prevState.count
            return {
                count: newCount,
            }
        })
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="iphone" />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity}</div>
                    <div className="product-price">Price: $ {price}</div>

                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField value={this.state.count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                        >
                            +
                        </Button>
                    </div>
                    <CardActions className="btn-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
