// components/ImageDisplay.tsx
interface ImageDisplayProps {
    id: number;
  }
  
  const ImageDisplay: React.FC<ImageDisplayProps> = ({ id }) => {
    const imageUrl = `/images/${id}.png`;
    return <img src={imageUrl} alt="Description" />
  }
  
  export default ImageDisplay;