import { PrimaryButton } from "@/Components/Common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LeftContent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem] justify-center h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2 },
          offscreen: {
            y: 10,
          },
        }}
      >
        <h1 className="text-white font-[600] text-[2.1rem] sm:text-[1.5rem] lg:text-[2.1rem]">
          Rohit is a <span className="text-primary">web designer</span> and{" "}
          <span className="text-primary">front-end developer</span>
        </h1>
      </motion.div>

      <span className="description ">
        Enter the digital realm where technology intertwines with creativity.
      </span>

      <Link href="/?action=contact">
        <PrimaryButton
          childClass="border-primary text-white hidden sm:block w-[11rem]"
          text="Hire me!!"
        />
      </Link>
    </div>
  );
};

export default LeftContent;
