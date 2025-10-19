import HomePage from "@/Components/Home";
import PageLayout from "@/Components/Layouts/PageLayout";

export const metadata = {
  metadataBase: new URL("https://rohverse.vercel.app"), 
  title: "Rohit - React JS Developer Portfolio",
  description:
    "Welcome to the world of React JS through the eyes of Rohit. Explore innovative solutions, captivating designs, and seamless user experiences crafted by a passionate developer.",
  openGraph: {
    title: "Rohit - React JS Developer Portfolio",
    description:
      "Welcome to the world of React JS through the eyes of Rohit. Explore innovative solutions, captivating designs, and seamless user experiences crafted by a passionate developer.",
    url: "https://rohverse.vercel.app", // full URL
    images: [
      {
        url: "/Assets/rohit_element.png", // relative path is fine
        width: 500,
        height: 500,
        alt: "Rohit Portfolio Preview",
      },
    ],
  },
};

export default function Home() {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
}
