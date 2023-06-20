export type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
    category?: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
        image: '/images/iphone-red.webp',
        category: 'phone',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: '/images/iphone-gold.webp',
        category: 'phone',
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: '/images/iphone-purple.webp',
        category: 'phone',
    },
    {
        id: 4,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 700,
        image: '/images/iphone-grey.webp',
        category: 'phone',
    },
    {
        id: 5,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: '/images/iphone-silver.webp',
    },
    {
        id: 6,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 500,
        image: '/images/iphone-green.webp',
    },
]
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
