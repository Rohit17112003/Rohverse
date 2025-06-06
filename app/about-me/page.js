import About from "@/Components/About";
import PageLayout from "@/Components/Layouts/PageLayout";
import React from "react";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="w-full pt-[5rem] pb-[5rem] sm:pb-0  lg:pt-[9rem] px-[1rem] sm:px-0">
        <About
          isLine={false}
          icon="/"
          gap="gap-[2rem] lg:gap-[3rem]"
          des="Who am i?"
        />
      </div>
    </PageLayout>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return {
    title: "Meet Sourav: Crafting Digital Experiences with React JS",
    description:
      "Dive into the story behind the code. Discover Sourav's journey into the realm of web development, his passion for React JS, and his relentless pursuit of excellence in crafting digital masterpieces.",
    openGraph: {
      images: [
        {
          url: "./sourav_element.png",
          width: 500,
          height: 500,
        },
      ],
    },
  };
}
