import Search from '../pages/Search'
import Trending from '../pages/Trending'
import Latest from '../pages/Latest'
import Link from 'next/link'



const page = () => {
  return (
    <div>
      <Search />
      <Trending />
      <Latest />
      <div className='flex justify-center gap-10 border-2 border-black/30 rounded-xl lg:mx-80 md:mx-20 mx-10 lg:my-20 md:my-20 my-10 items-center lg:text-xl md:text-xl text-sm p-4 '>
        To get notifications about latest recipes please subscribe <Link href='/Subscribe' className='bg-[#FFA2A6] p-3 rounded-xl'>Subscribe</Link>
      </div>
    </div>
  )
}

export default page