import Image from "next/image";
import Link from "next/link";
function Footer () {
    return (
<footer>
    {/* Top Footer */}
<div className="flex items-center bg-amazon_blue p-2 flex-grow py-3">
    <div className="mt-16 mb-14 ml-4 sm:flex-1 ">
        <Image src="/amzon.png" width={200} height={150} />
        <h2 className="mt-4 text-[30px]  text-white text-semibold ">Contact Us</h2>
        <p className="mt-3 text-[20px]  text-white text-semibold">Email: xyz@gmail.com</p>
        <p className="mt-1 text-[20px]  text-white text-semibold">Phone: 03000938198</p>
    </div>
</div>


    {/* Bottom Footer */}
</footer>
    )

}

export default Footer;