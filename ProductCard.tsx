import Image from "next/image"
function ProductCard(){
    return (
        <div className="flex flex-col bg-fuchsia-300 justify-center md:flex-row gap-28 px-3 py-3 ">
            
            {/*Card 1 */}

            <div className="w-3/12 border border-blue-800 bg-emerald-200">
                
                <div className="flex justify-center px-1 py-2">
                    <Image 
                src="/images1.jpg" 
                alt="product" 
                width={200}
                height={200}
                />
                </div>

                <p className="text-center py-4 text-orange-500">Vegitable Cart</p>
                <p className="text-center py-3 text-yellow-800">Rs.650</p>


                <div className="flex justify-center my-2">
                <button className="btn bg-slate-600 text-white py-2 px-4 rounded-lg">Buy Now</button>
                 </div>

                 </div>

                 {/*Card 2 */}

                 <div className="w-3/12 border border-green-800 bg-stone-400">
                
                <div className="flex justify-center px-1 py-2">
                    <Image 
                src="/images (2).jpg" 
                alt="product" 
                width={200}
                height={200}
                />
                </div>

                <p className="text-center text-amber-300 py-2">Vegitable Cart</p>
                <p className="text-center text-amber-200 py-2">Rs.1080</p>


                <div className="flex justify-center my-4">
                <button className="btn bg-lime-200 py-2 px-4 rounded-lg">Buy Now</button>
                 </div>
                 </div>

                 {/*Card 3 */}

                 <div className="w-3/12 border border-red-900 bg-blue-400">
                
                <div className="flex justify-center px-1 py-2">
                    <Image 
                src="/images3.jpg" 
                alt="product" 
                width={100}
                height={100}
                />
                </div>

                <p className="text-center py-2">Vegitable Cart</p>
                <p className="text-center py-2">Rs.900</p>


                <div className="flex justify-center my-5">
                <button className="btn bg-slate-600 text-white py-2 px-4 rounded-lg">Buy Now</button>
                

                 </div>

                 </div>
        </div>
    )
}                       
export default ProductCard