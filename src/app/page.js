import Categories from "@/components/Categories";
import ImageSlider from "@/components/ImageSlider";
import TopProduct from "@/components/TopProduct";
import Footer from "@/components/Utilities/Footer";

export default async function Home() {
  return (
    <main className="w-3/4 mx-auto">
      <section>
        <ImageSlider />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <TopProduct />
      </section>
      <section>
        <Footer />
      </section>
    </main> 
  );
}
