import { motion } from "framer-motion";
import "../styles/ImageStack.css";

interface Combo {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ImageStackProps {
  combos: Combo[];
  selectedIndex: number;
  onImageClick: (index: number) => void;
}

export function ImageStack({ combos, selectedIndex, onImageClick }: ImageStackProps) {
  return (
    <div className="imagesStack">
      {combos.map((combo, idx) => (
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
          data-price={`$${combo.price.toFixed(2)}`}
          data-name={combo.name}
        >
          <img
            src={combo.image}
            alt={`Combo ${combo.name}`}
            className="imgCombo"
          />
          <span data-description={combo.description} className="description"></span>
        </motion.div>
      ))}
    </div>
  );
}
