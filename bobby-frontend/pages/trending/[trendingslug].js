import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from '../../app/Header';
import Footer from '../../app/footer'
import '../../app/globals.css'
import Youtube from '../../public/Youtube.jpeg'
import Image from 'next/image';
import Link from 'next/link';

const Trendingblog = ({ trending }) => {
  return (
    <div className='bg-[#FFE3E3]'>
      <Header />
      <div className='lg:mx-20 md:mx-20 mx-4 my-20 space-y-10 flex flex-col items-center'>
      <div className='lg:text-2xl md:text-2xl text-xl font-semibold'>{trending.attributes.Title}</div>
      <img
        src={`http://127.0.0.1:1337${trending.attributes.Image.data.attributes.url}`}
        alt={trending.attributes.Title}
        className='lg:w-[70%] md:w-[80%] w-full h-[500px]'
      />
      <div>
      <ReactMarkdown className='lg:mx-48 md:mx-10 mx-4'>{trending.attributes.Description}</ReactMarkdown>
      <div className="flex items-center justify-center border-2 border-black/80 lg:mx-72 md:mx-10 rounded-xl my-20 gap-10 p-4">
            <Image 
            src={Youtube}
            alt='No Image Found'
            className='w-20 h-16'/>
            <Link href={trending.attributes.URL} className="flex justify-center underline text-xl mt-4"> You can watch the recipe Here</Link>
           
            </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { trendingslug } = params;
  try {
    const response = await axios.get(`http://127.0.0.1:1337/api/trendings?populate=deep`);
    const trendings = response.data.data[0].attributes.recipes.data;
    const trending = trendings.find(trending => trending.attributes.slug === trendingslug);
    
    if (!trending) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        trending
      }
    };
  } catch (error) {
    console.error("Unable to retrieve trending data");
    return {
      notFound: true
    };
  }
}

export default Trendingblog;
