import Image from "next/image";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function Home() {
  return (
<main >
  <Hero  />
  <Products/>
  <Testimonial/>
  <Footer/>
</main>
  );
}
