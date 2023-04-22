import TopBanner from "@/components/Banner/TopBanner";
import Products from "@/components/Products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[700px]">
      <div>
        <TopBanner></TopBanner>
        <Products></Products>
      </div>
    </main>
  );
}
