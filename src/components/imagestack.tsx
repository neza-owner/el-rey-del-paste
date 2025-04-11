import { motion } from "framer-motion";

interface ImageStackProps {
  images: string[];
  selectedIndex: number;
  onImageClick: (index: number) => void;
}

export function ImageStack({ images, selectedIndex, onImageClick }: ImageStackProps) {
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
          className={`rounded-xl p-2 bg-white dark:bg-neutral-800 dark:border-neutral-700 border-1 border-neutral-100 flex-shrink-0 overflow-hidden shadow-md ${selectedIndex === idx ? 'border-4 border-orange-500' : ''}`}
          onClick={() => onImageClick(idx)}
        >
          <img
            src={image}
            alt={`Stacked Image ${idx}`}
            className="rounded-lg object-cover flex-shrink-0
              h-[15vh] w-[15vh] md:h-[10vh] md:w-[10vh] lg:h-[30vh] lg:w-[30vh]"
          />
        </motion.div>
      ))}
    </div>
  );
}
