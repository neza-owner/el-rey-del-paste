"use client";

import { motion } from "framer-motion";

interface ImageStackProps {
  images: string[];
}

export function ImageStack({ images }: ImageStackProps) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl p-2 bg-white dark:bg-neutral-800 dark:border-neutral-700 border-1 border-neutral-100 flex-shrink-0 overflow-hidden shadow-md"
        >
          <img
            src={image}
            alt={`Stacked Image ${idx}`}
            className="rounded-lg object-cover flex-shrink-0
              h-[6vh] w-[6vh] md:h-[10vh] md:w-[10vh] lg:h-[33vh] lg:w-[33vh]"
          />
        </motion.div>
      ))}
    </div>
  );
}
