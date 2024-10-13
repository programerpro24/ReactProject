import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 bg-zinc-100">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight text-zinc-950">Featured projects</h1>
      </div>

      <div className="relative bottom w-full h-5">
        <div className="absolute -bottom-3 circle w-2 h-2 bg-zinc-900 ml-[80px] rounded-full"></div>
        <h1 className="text-zinc-950 absolute -bottom-5 ml-[100px] text-1xl">Cardboard Spaceship</h1>

        <div className="absolute -bottom-3 circle w-2 h-2 bg-zinc-900 ml-[670px] rounded-full"></div>
        <h1 className="text-zinc-950 absolute -bottom-5 ml-[690px] text-1xl">AH2 & Matt Horn</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="flex overflow-hidden absolute z-[9] text-[#CDEA68] -translate-x-1/2 left-full top-1/2 -translate-y-1/2 text-8xl tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")`,
                }}
              ></div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute text-[#CDEA68] translate-x-1/2 right-full top-1/2 -translate-y-1/2 text-8xl tracking-tighter flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")`,
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
