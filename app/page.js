import HomePage from "@/Components/Home";
import PageLayout from "@/Components/Layouts/PageLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PageLayout>
        <HomePage />
      </PageLayout>
    </>
  );
}

export async function generateMetadata() {
  return {
    title: "Rohit - React JS Developer Portfolio",
    description:
      "Welcome to the world of React JS through the eyes of Rohit. Explore innovative solutions, captivating designs, and seamless user experiences crafted by a passionate developer.",
    openGraph: {
      images: [
        {
          url: "../Assets/sourav_element.png",
          width: 500,
          height: 500,
        },
      ],
    },
  };
}
