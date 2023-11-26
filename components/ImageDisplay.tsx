// components/ImageDisplay.tsx

// idのプロパティを削除
interface ImageDisplayProps {
}

const ImageDisplay: React.FC<ImageDisplayProps> = () => {
  // 1から8までのランダムな数を生成する関数
  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 8) + 1;
  }
  
  // 生成したランダムな数をimageUrlで使用
  const imageUrl = `/images/${getRandomNumber()}.jpg`;

  return <img src={imageUrl} alt="Description" />
}

export default ImageDisplay;