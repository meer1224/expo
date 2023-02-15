import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Ban from "../components/Ban";
import Pro2 from "../components/Pro2";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

<Header />
{/* Banner */}
<Banner/>

{/* Products */}
<Product/>

{/* Ban2 */}
<Ban/>

{/* Pro2 */}
<Pro2/>

{/* Footer */}
<Footer/>
    </div>
  );
}