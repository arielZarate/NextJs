import Hero from "@/components/Hero";
import { SliderData2 } from "@/components/SliderData";
import Slider from "@/components/Slider";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <div>
        <Hero
          heading="Black Monkey"
          message=" Tienda Unisex uniformal"
          textButton="Ir a tienda"
          colorHeading="text-yellow-500"
        ></Hero>

        <Slider slides={SliderData2} />

        <Instagram />
      </div>
    </div>
  );
}
