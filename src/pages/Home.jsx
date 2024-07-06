import Type from "../components/type/Type";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <section className="w-full h-screen flex justify-center items-center text-center">
          <div className=" py-20">
            <div className="text-5xl font-bold md:text-5xl text-white ">
              Би Отгон баатар байна
            </div>
            <div className="text-2xl text-gray-200">
              <Type />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
