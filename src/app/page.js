import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import About from "./components/About";
import Values from "./components/Values";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Bunker from "./components/Bunker";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

import { client } from "../sanity/client.js";

const SANITY_QUERY = `{
 
  "faqs": *[_type == "faq"] | order(id asc) {
    id,
    question,
    answer,
    isOpen
  },
  "coaches": *[_type == "coach"] | order(id asc) {
    id,
    name,
    experience,
    thumb,
    "video": video{'videoUrl':asset->url}
  },
  "pricing": *[_type == "pricing"] | order(id asc) {
    id,
    currentDuration,
    trainingType,
    trainingDescription,
    duration
  }
}`;

async function getSanityData() {
  const data = await client.fetch(
    SANITY_QUERY,
    {}
    // {
    //   next: {
    //     revalidate: 3600 // look for updates to revalidate cache every hour
    //   }
    // }
  );
  console.log(data);
  return data;
}

export default async function Home() {
  const { faqs: faq, coaches, pricing } = await getSanityData();

  return (
    <div className=" min-h-screen flex max-w-screen overflow-x-hidden flex-col w-screen">
      <Navbar />
      <Preview />
      <About />
      <Values />
      <Banner />
      <Suspense>
        <Pricing pricing={pricing} />
      </Suspense>
      <Coaches coaches={coaches} />
      <Bunker />
      <Reviews />
      <Suspense>
        <Faq faq={faq} />
      </Suspense>
      <Footer />
    </div>
  );
}
