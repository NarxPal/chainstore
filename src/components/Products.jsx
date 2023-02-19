import product from '../../client/images/product.jpg'
import product2 from '../../client/images/product2.jpg'
import product3 from '../../client/images/product3.jpg'

const Products =() => {
    return (
        <div className="flex flex-col w-full justify-center items-center p-10">
            <div className="flex flex-1 md:mr-10 justify-center">
                <h2 className="text-white text-2xl text decoration-double">Newest products</h2>
            </div>
            <div className=" text-white grid grid-cols-3 gap-4 w-full justify-center items-center p-5">
                <div className="rounded border-t-2 border-b-2 border-sky-400 justify-center bg-inherit cursor-pointer">
                    <div className="p-5">
                    <img src={product} alt="digiproduct" className='h-80 w-22 cursor-pointer' />
                    <h2 className='flex justify-center p-2'>Hanami Fan Art</h2>
                    <h1 className='flex justify-end pl-5 text-2xl'>10ETH</h1>
                    </div>
                </div>
                <div className="rounded border-t-2 border-b-2 border-sky-400 justify-center bg-inherit cursor-pointer">
                    <div className="p-5">
                    <img src={product2} alt="digiproduct" className='h-80 w-22 cursor-pointer' />
                    <h2 className='flex justify-center p-2'>Eren Jaeguer Fan Art</h2>
                    <h1 className='flex justify-end pl-5 text-2xl'>10ETH</h1>
                    </div>
                </div>
                <div className="rounded border-t-2 border-b-2 border-sky-400 justify-center bg-inherit cursor-pointer">
                    <div className="p-5">
                    <img src={product3} alt="digiproduct" className='h-80 w-22 cursor-pointer' />
                    <h2 className='flex justify-center p-2'>Megumi Fan Art</h2>
                    <h1 className='flex justify-end pl-5 text-2xl'>10ETH</h1>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default Products;