import Banner from "./components/banner"
import WhyUs from "./components/whyus"
import Experience from "./components/experience"
import Advantages from "./components/advantages"
import Developer from "./components/developer"
import OurClients from "./components/ourclients"
import ModernHouses from "./components/modernhouses"
import OurDeveloperServices from "./components/ourdeveloperservices"
import Services from "./components/services"
import FindUs from "./components/findus"

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <WhyUs />
      <Experience />
      <Advantages />
      <Developer />
      <OurClients />
      <ModernHouses />
      <OurDeveloperServices />
      <Services />
      <FindUs />
    </main>
  )
}
