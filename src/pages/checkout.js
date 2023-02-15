import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


    
function Checkout() {
  const items = useSelector(selectItems);
    
  return (
   
    
    <div className="bg-gray-100">
        <Head>
        <title>Amazon 2.0</title>
        </Head>
        <Header/>

        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm" >
<Image
src="/bc.png"
width={1020}
height={250}
objectFit='contain'
/>
<div className="flex flex-col p-5 space-y-10 bg-white">
  <h1 className="text-3xl border-b pb-4">{items.length === 0 ? "Your Basket is empty." : "Shopping Basket"}</h1>

  {items.map((item, i) => (
    <CheckoutProduct
    key={i}
    id={item.id}
    name={item.name}
    price={item.price}
    shipping={item.shipping}
    imageSrc={item.imageSrc}
    />
  ))}
</div>
            </div>
            {/* Right */}
            <div></div>
        </main>

    </div>
  )
}


export default Checkout;