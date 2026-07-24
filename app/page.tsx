import Hero from "@/components/Hero";
import BenefitsMarquee from "@/components/BenefitsMarquee";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import WhyThermal from "@/components/WhyThermal";
import Testimonials from "@/components/Testimonials";
import CustomOrder from "@/components/CustomOrder";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <BenefitsMarquee />
      <WhyUs />
      <WhyThermal />
      <FeaturedProducts />
      <CustomOrder />
      <Testimonials />
      <Contact />
    </>
  );
}
