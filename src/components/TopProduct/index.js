import Image from "next/image";
import Link from "next/link";

const TopProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=8`)
    const data = await response.json()
    return (
        <div className="bg-white">
            <p className="text-3xl font-bold">Top Product</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10">
                {data.map((product) => (
                    <div className="relative" key={product.id}>
                        <div className="items-center rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="w-fit h-64 object-cover rounded-t-lg transition-transform duration-500 delay-100 transform hover:scale-105 px-auto" width={500} height={500}
                            />
                        </div>
                        <div className="p-4 rounded-b-lg">
                            <Link href={`/products/${product.id}`} className="text-2xl font-bold">
                            <p className="text-xl">
                            {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
                            </p>
                            </Link>
                            
                            <p className="text-gray-600">Rp. {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopProduct