import Image from "next/image"
function ProductCard1(){

    return(
        <div className="flex flex-col justify-center md:flex-row bg-green-200  gap-44  px-3 py-32  ">
                        {/*book 1 */}

            <div className="w-2/6 border border-sky-800 bg-amber-200 ">

                <div className=" flex justify-center px-2 py-2">
                    <Image src="/istockphoto-1178595473-612x612.jpg"
                    width={300}
                    height={300}
                    alt="card"  />
                </div>

                <p className="text-center py-2 text-xl text-slate-800" >History Book</p>
                <p className="text-center py-2 text-2xl text-blue-700">Rs.1300</p>

                <div className="flex justify-center my-2"> 
                    <button className="btn bg-violet-500 py-2 px-3 text-white text-lg rounded-1xl">Buy Now</button>
                    </div>
            </div>


            {/*book 2 */}

            <div className="w-2/6 border border-sky-800 bg-amber-200 ">

                <div className=" flex justify-center px-2 py-2">
                    <Image src="/istockphoto-1321271538-612x612.jpg"
                    width={300}
                    height={300}
                    alt="/"/>
                </div>

                <p className="text-center py-2 text-xl text-slate-800" >Knowledge Book</p>
                <p className="text-center py-2 text-2xl text-red-800">Rs.1500</p>

                <div className="flex justify-center my-2"> 
                    <button className="btn bg-violet-100 py-2 px-3 text-gray-800 text-lg rounded-1xl">Buy Now</button>
                    </div>
            </div>



        </div>
    )
}
export default ProductCard1