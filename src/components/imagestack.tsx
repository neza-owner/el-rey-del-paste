import { motion } from "framer-motion";
import "../styles/ImageStack.css";

interface ImageStackProps {
  images: string[];
  selectedIndex: number;
  onImageClick: (index: number) => void;
}

export function ImageStack({ images, selectedIndex, onImageClick }: ImageStackProps) {
  return (
    <div className="imagesStack">
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
          className={`imageStack ${selectedIndex === idx ? 'active' : 'inactive'}`}
          onClick={() => onImageClick(idx)}
        >
          <img
            src={image}
            alt={`Stacked Image ${idx}`}
            className="imgCombo"
          />
        </motion.div>
      ))}
    </div>
  );
}
