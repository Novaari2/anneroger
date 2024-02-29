import ProductDetail from "@/components/ProductDetail"

const Page = async ({ params }) => {
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const data = await response.json()

    const reviews = {
        id: 1,
        title: "Great product",
        content: "I love this product!",
        author: "John Doe",
        date: "2022-01-01"
    }
    return (
        <div>
            <ProductDetail product={data} reviews={reviews} />
        </div>
    )
}

export default Page