import { Inter } from 'next/font/google'
import Nav from '../components/nav'
import About from '@/components/about'
import Services from '@/components/services'
import Blog from '@/components/blog'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
      <div>
        <div id='home'>
          <Nav />
        </div>
        <div className='m-10'></div>
        <div id='about'>
          <About />
        </div>
        <div className='m-10'></div>
        <div id='services'>
          <Services />
        </div>
        <div className='mt-20'></div>
        <div id='blogs'>
          <Blog />
        </div>
        <div className='m-10'></div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
