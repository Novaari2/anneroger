import Image from "next/image";

const Categories =  async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await response.json()
    
    return(
        <div className="bg-white">
            <div className="flex flex-wrap gap-5 justify-between mt-10">
                {data.map((category) => (
                    <div className="w-32 h-32 relative" key={category.id}>
                        <div className="items-center rounded-lg overflow-hidden shadow-md">
                            <Image src="/images/categories-furniture.svg" alt="logo" width={300} height={30} className="w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;