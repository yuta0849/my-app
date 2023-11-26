import Image from 'next/image'
import ImageDisplay from '../components/ImageDisplay';

// export default function Home() {
//   return (
    
//     <img className='animate-up w-80' src="/1.jpg" alt="cat_1"/>
//     )
// }

const HomePage: React.FC = () => {
  return (
    <div>
      <ImageDisplay id={1} />
      <ImageDisplay id={2} />
    </div>
  );
}

export default HomePage;