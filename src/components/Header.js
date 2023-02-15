import Image from "next/image";
import { HiMagnifyingGlass, HiShoppingCart, HiOutlineBars3 } from "react-icons/hi2";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header ()  {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
   
  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div  className="mt-4 ml-4  flex items-center flex-grow sm:flex-grow-0">
                <Image
                onClick={() => router.push('/')}
                src="/Amzon.png" width={150} height={40} objectFit="contain" className="cursor-pointer"
                />
            </div>



{/* Search */}
<div className="ml-6 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
  
    <input className="p-4 rounded-full h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
<HiMagnifyingGlass className="h-12 w-12 px-2"/>
</div>

{/* Right */}
<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
  <div onClick={!session ?  signIn : signOut}  className="link bg-amazon_blue">
  
    <p>
        {session ? `Hello, ${session.user.name}` : 'Sign In'} 
    </p>
    <p className="font-extrabold md:text-sm">Account & Lists</p>
    </div>

    <div className="link">
    <p>Returns</p>
    <p className="font-extrabold md:text-sm">& Orders</p>
  </div>

<div onClick={() => router.push('/checkout')}
className="relative link flex items-center">
  <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
<HiShoppingCart className="h-10 w-10" />
<p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
</div>
</div>
</div>



        {/* Bottom  Nav */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
         <p className="link flex items-center">
         <HiOutlineBars3 className="h-6 w-6 mr-1"/>
          All
         </p>
         <p className="link">Prime Video</p>
         <p className="link">Amazon Business</p>
         <p className="link">Today's Deals</p>
         <p className="link hidden lg:inline-flex">Electronics</p>
         <p className="link hidden lg:inline-flex">Food & Grocery</p>
         <p className="link hidden lg:inline-flex">Prime</p>
         <p className="link hidden lg:inline-flex">Buy Again</p>
         <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
         <p className="link hidden lg:inline-flex">Health & Peronal Care</p>
        </div>
    </header>
  )
}

export default Header