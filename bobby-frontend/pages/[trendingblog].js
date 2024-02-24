import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Trendingblog = ({ trendings }) => {
  return (
    <div>
      <h1>{trendings.attributes.Title}</h1>
      <img src={`http://127.0.0.1:1337${trendings.attributes.Image.data.attributes.url}`} alt={recipe.attributes.Title} />
      <ReactMarkdown>{trendings.attributes.Description}</ReactMarkdown>
    </div>
  );
};

export async function getServerSideProps({ params }) {
    const { slug } = params;
    try {
      const response = await axios.get(`http://127.0.0.1:1337/api/trendings?populate=deep`);
      const trendings = response.data.data;
      const trending = trendings.find(recipe => trending.attributes.slug === slug);
      
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
      console.error("Unable to retrieve recipe data");
      return {
        notFound: true
      };
    }
  }
  
  
export default Trendingblog;