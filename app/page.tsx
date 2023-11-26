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
      <ul className='text-center font-extrabold text-blue-300 leading-relaxed'>
        <li><a href={`/images/${'cat_1'.split('_')[1]}.jpg`}>cat_1</a></li>
        <li><a href={`/images/${'cat_2'.split('_')[1]}.jpg`}>cat_2</a></li>
        <li><a href={`/images/${'cat_3'.split('_')[1]}.jpg`}>cat_3</a></li>
        <li><a href={`/images/${'cat_4'.split('_')[1]}.jpg`}>cat_4</a></li>
        <li><a href={`/images/${'cat_5'.split('_')[1]}.jpg`}>cat_5</a></li>
        <li><a href={`/images/${'cat_6'.split('_')[1]}.jpg`}>cat_6</a></li>
        <li><a href={`/images/${'cat_7'.split('_')[1]}.jpg`}>cat_7</a></li>
        <li><a href={`/images/${'cat_8'.split('_')[1]}.jpg`}>cat_8</a></li>
        
      </ul>
    <div className='flex justify-center'>
      <div className='animate-up w-80 block'>
      <ImageDisplay id={1} />
      </div>
    </div>
    </div>
  );
}

export default HomePage;