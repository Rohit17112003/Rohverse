import PageLayout from "@/Components/Layouts/PageLayout";
import AllProject from "@/Components/Project";

const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="w-full pt-[5rem] pb-[5rem] lg:pb-[7rem]  lg:pt-[9rem] px-[1rem] sm:px-0">
        <AllProject />
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;

export async function generateMetadata() {
  return {
    title: "Sourav's Showcase: A Glimpse into Recent React JS Creations",
    description:
      "Embark on a journey through Sourav's recent projects, where every line of code tells a story. From stunning user interfaces to powerful functionalities, experience the magic of React JS in action.",
    openGraph: {
      images: [
        {
          url: "../Assets/project-banner.png",
          width: 500,
          height: 500,
        },
      ],
    },
  };
}
