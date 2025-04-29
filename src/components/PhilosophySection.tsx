import Image from "next/image";
import { Familjen_Grotesk } from "next/font/google";
import philosophyImage from "/public/philosophy.jpg"; // Make sure the image exists!

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PhilosophySection() {
  return (
    <section className={`w-full bg-[#FAF7EB] py-12 ${familjenGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl mb-8 text-black">
          Our Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-screen">
            <div className="relative w-full h-full min-h-[200px] md:min-h-screen">
                <Image
                src={philosophyImage}
                alt="Philosophy image"
                fill
                className="object-cover"
                priority
                />
            </div>

            <div className="bg-[#EBFF84] flex items-center p-8">
                <p className="text-3xl text-black leading-relaxed">
                At 360 Cost Management, we are dedicated to providing expert financial advice
                that secures the future of our clients. With a focus on trust, integrity, and
                professionalism, we aim to be your trusted financial partner.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}