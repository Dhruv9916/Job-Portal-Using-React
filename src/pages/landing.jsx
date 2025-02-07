import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    // <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
    //   <section className="text-center ">
    //     <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
    //     Elevate Your Career with Tech Hire
    //       <span className="flex items-center gap-2 sm:gap-6">
    //       Find the perfect job
    //         <img
    //           src="/logo.jpg"
    //           className="h-14 sm:h-24 lg:h-32"
    //           alt="Techhire Logo"
    //         />
    //       </span>
    //     </h1>
    //     <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
    //     Discover top opportunities or hire the best talent with TechHire.
    //     </p>
    //   </section>
    //   <div className="flex gap-6 justify-center">
    //     <Link to={"/jobs"}>
    //       <Button variant="blue" size="xl">
    //         Find Jobs
    //       </Button>
    //     </Link>
    //     <Link to={"/post-job"}>
    //       <Button variant="destructive" size="xl">
    //         Post a Job
    //       </Button>
    //     </Link>
    //   </div>
    //   <Carousel
    //     plugins={[
    //       Autoplay({
    //         delay: 2000,
    //       }),
    //     ]}
    //     className="w-full py-10"
    //   >
    //     <CarouselContent className="flex gap-5 sm:gap-20 items-center">
    //       {companies.map(({ name, id, path }) => (
    //         <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
    //           <img
    //             src={path}
    //             alt={name}
    //             className="h-9 sm:h-14 object-contain"
    //           />
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //   </Carousel>

    //   <img src="/banner.jpg" className="w-full" />

    //   <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle className="font-bold">For Job Seekers</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         Search and apply for jobs, track applications, and more.
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle className="font-bold">For Employers</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         Post jobs, manage applications, and find the best candidates.
    //       </CardContent>
    //     </Card>
    //   </section>

    //   <section>
    //     <Accordion type="multiple" className="w-full">
    //       {faqs.map((faq, index) => (
    //         <AccordionItem key={index} value={`item-${index + 1}`}>
    //           <AccordionTrigger>{faq.question}</AccordionTrigger>
    //           <AccordionContent>{faq.answer}</AccordionContent>
    //         </AccordionItem>
    //       ))}
    //     </Accordion>
    //   </section>
    // </main>

    <main className="flex flex-col gap-8 sm:gap-16 py-8 sm:py-16">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight py-3 sm:py-6">
          Elevate Your Career with TechHire
          <span className="flex items-center gap-2 sm:gap-4">
            Find the perfect job
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-3 text-sm sm:text-lg">
          Discover top opportunities or hire the best talent with TechHire.
        </p>
      </section>

      <div className="flex gap-4 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="lg">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="lg">
            Post a Job
          </Button>
        </Link>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-8"
      >
        <CarouselContent className="flex gap-4 sm:gap-10 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-8 sm:h-12 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img src="/banner.jpg" className="w-full rounded-lg shadow-md" />

      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section> */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <Card className="p-6 max-w-sm mx-auto">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg font-semibold">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>

        <Card className="p-6 max-w-sm mx-auto">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg font-semibold">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <section className="w-full px-4 md:px-8 mx-auto">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
