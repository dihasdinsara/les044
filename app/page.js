import Image from "next/image";
import ProductList from "@/components/ProductList"
import Navbar from "@/components/Navbar"
import Getstart from "@/components/Getstart";
import Footer from "@/components/Footer";
import Aboutme from "@/components/Aboutme";
import Divider from "@/components/divider";


export default function Home() {
  return (
    <>
      
      <ProductList/>
      <Getstart/>
      <br />
      <br />
      <Divider/>
      <br />
      <br />
      <Aboutme/>
      
    </>
  );
}
