import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";

interface PhotoFrameProps {
  label?: string;
  className?: string;
}

const PhotoFrame = ({ label = "Add a photo", className = "" }: PhotoFrameProps) => {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      whileHover={{ rotate: [0, -2, 2, 0], scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className={`relative bg-card border-4 border-border rounded-lg p-2 shadow-md cursor-pointer inline-block ${className}`}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {image ? (
        <img
          src={image}
          alt="Valentine photo"
          className="w-48 h-48 object-cover rounded-md"
        />
      ) : (
        <div className="w-48 h-48 flex flex-col items-center justify-center gap-2 text-muted-foreground rounded-md bg-muted/50">
          <ImagePlus className="w-8 h-8" />
          <span className="text-sm font-medium">{label}</span>
        </div>
      )}
      <p className="text-center text-xs text-muted-foreground mt-1 font-medium">
        {label}
      </p>
    </motion.div>
  );
};

export default PhotoFrame;
