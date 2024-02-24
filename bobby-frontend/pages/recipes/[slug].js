import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from '../../app/Header';
import Footer from '../../app/footer'
import '../../app/globals.css'

const recipeblog = ({ recipe }) => {
  return (
    <div className='bg-[#FFE3E3]'>
      <Header />
      <div className='mx-20 my-20 space-y-10 flex flex-col items-center'>
      <div className='text-2xl font-semibold'>{recipe.attributes.Title}</div>
      <img
        src={`http://127.0.0.1:1337${recipe.attributes.Image.data.attributes.url}`}
        alt={recipe.attributes.Title}
        className='w-[70%] h-[600px]'
      />
      <ReactMarkdown className='lg:mx-48 mx-10'>{recipe.attributes.Description}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const response = await axios.get(`http://127.0.0.1:1337/api/recipes?populate=deep`);
    const recipes  = response.data.data;
    const recipe = recipes.find(recipe => recipe.attributes.slug === slug);
    
    if (!recipe) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        recipe
      }
    };
  } catch (error) {
    console.error("Unable to retrieve recipe data");
    return {
      notFound: true
    };
  }
}

export default recipeblog;
