import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";




const products = [

    {
      id: 1,
      name: 'Original M10 Headphones Bluetoo..',
      href: '#',
      price: 'PKR 2,215.76',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',
      imageSrc: '/p2.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Smart Watch',
      href: '#',
      price: 'PKR 4,415',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',

      imageSrc: '/p3.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Bluetooth Handsfree',
      href: '#',
      price: 'PKR 2,215.46',
            shipping: 'Free Shipiing',
            button: 'Add to Basket',

      imageSrc: '/p1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Bluetooth Headphone..',
      href: '#',
      price: 'PKR 3,215.56',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',

      imageSrc: '/p4.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Wireless Charger',
      href: '#',
      price: 'PKR 2,750.70',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',

      imageSrc: '/p5.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Lenovo Tablet',
      href: '#',
      price: 'PKR 10,215.76',
            shipping: 'Free Shipiing',
            button: 'Add to Basket',

      imageSrc: '/p6.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Ipjone 13 Pro Max',
      href: '#',
      price: 'PKR 2,000.76',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',
      imageSrc: '/p7.jpg',
      
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'Iphone 14 Cover',
      href: '#',
      price: 'PKR 1,115.76',
      shipping: 'Free Shipiing',
      button: 'Add to Basket',

      imageSrc: '/p8.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example({id, name, price, shipping, imageSrc}) {
    const dispatch = useDispatch();
    const router = useRouter();

    const addItemToBasket = () => {
const product = {
id,
  name,
  price,
  shipping,
  imageSrc,
};
// Sending the product as an action to the REDUX store... the basket slice  
dispatch(addToBasket(product))

    }
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       

  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 md:-mt-12">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div  onClick={() => router.push('detail')} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <h3 className="mt-2 text-sm text-gray-700">{product.shipping}</h3>
                 <button onClick={addItemToBasket} className="mt-3 px-4 py-3  w-full text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-black-300 border border-black-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 hover:bg-black ">{product.button}</button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  