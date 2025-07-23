import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import LinkPreview from "../components/LinkPreview";

import img1 from "./img1.png"; 
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

export default function Page() {
  return (
    <main className="rounded-lg w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-center six-caps-regular text-4xl">Proyectos Personales</h1>
      <ScrollStack
        className="h-screen"
        itemDistance={60}
        itemStackDistance={20}
        baseScale={0.9}
        itemScale={0.025}
        rotationAmount={0.6}
      >
        {/* SSI 1: Toro's Wok */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent">
          <LinkPreview
            url="https://toroswok.vercel.app/"
            image={img1}
            title="Toro's Wok"
          />
        </ScrollStackItem>

        {/* SSI 2: King Kong */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent">
          <LinkPreview
            url="https://kingkongg.netlify.app/"
            image={img2}
            title="King Kong"
          />
        </ScrollStackItem>

        {/* SSI 3: TA-TE-TI */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-lime-400/20 via-green-400/10 to-transparent">
          <LinkPreview
            url="https://ta-te-ti-1-2-3.netlify.app/"
            image={img3}
            title="TA-TE-TI"
          />
        </ScrollStackItem>

        {/* SSI 4: Calculadora */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-lime-400/20 via-green-400/10 to-transparent">
          <LinkPreview
            url="https://calcwindows.netlify.app/"
            image={img4}
            title="Calculadora"
          />
        </ScrollStackItem>

        {/* SSI 5: Santi's CORP NEWS */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-lime-400/20 via-green-400/10 to-transparent">
          <LinkPreview
            url="https://santiscorp-news.netlify.app/"
            image={img5}
            title="Santi's CORP NEWS"
          />
        </ScrollStackItem>
      </ScrollStack>
    </main>
  );
}
