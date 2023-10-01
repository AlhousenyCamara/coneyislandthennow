import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex h-screen relative overflow-hidden">
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-black opacity-70">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(old.png)'}}></div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-black opacity-70">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(new.png)'}}></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-4xl px-5 md:text-7xl font-bold text-orange font-coney">CONEY ISLAND THEN AND NOW</h1>
        </div>
      </div>
      <section className='p-2 md:p-20'>
        <div className="inset-0 rounded-lg flex items-center justify-center mt-2">
      <video width="1020" height="240" controls poster="thumbnail.png">
        <source src="t.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='mt-8 text-2xl md:text-6xl text-center font-coney'>“Coney Island: Then and Now” </div>
    <div className='text-lg md:text-2xl text-center mt-5 md:mt-8'>This gritty documentary film shows the evolution of Coney Island, Brooklyn’s famous beachfront amusement-infused neighborhood, which has made many transformations over the years. The film details the history and nostalgia of Coney Island’s boardwalk, including the iconic landmarks the Wonder Wheel, Cyclone, Nathan’s Hot Dogs, The Mermaid Parade, Graffiti Walk, and the Coney Island USA Circus Sideshow.</div>
    <div className='text-lg md:text-2xl text-center mt-5'>There are many stories to be told in this inclusive community made up of multiple cultures, where an interesting dichotomy between old and new Coney Island collides with gentrification and a booming real estate market. Learn about visionary George C. Tilyou’s historic Steeplechase Park, land baron Fred Trump’s controversial Trump Village, and see how modern day residents, like rapper and Coney Island native Gorilla Nems, have adapted to the times. This is a special place and a story that must be told.</div>
    <div className='text-2xl md:text-5xl text-center mt-5 mb-8 text-orange'>3 Avenues 21 blocks infinite stories.</div>
    <div className='text-2xl md:text-4xl text-center font-coney'>“Coney Island: Then and Now” </div>
      <div className="flex justify-center mt-5">
    <img src="post1.jpeg" alt="Flyer 1" className="w-1/3 mx-2"/>
    <img src="post2.png" alt="Flyer 2" className="w-1/3 mx-2"/>
  </div>
    <div className='flex flex-row justify-center text-2xl md:text-2xl text-center mt-5 mb-8 text-white'>
      <span className='mr-8'>Produced By: KIMBERLY GRAY </span>
      <span> Directed By: MARIA CLARA</span>
    </div>
    <div className=' flex justify-between flex-col text-2xl md:text-4xl text-center text-orange '>
    <span>STARRING: GORILLA NEMS</span>
    <span className='mt-2'>DANIELLE MASTRION</span>
    <span className='mt-2'>XAVIER FRANKS</span>
    <span className='mt-2'>DICK ZIGUN</span>
    <span className='mt-2'>WENDY BLADES</span>
    <span className='mt-2'>BRENDAN SCHWEDA </span>
    <span className='mt-2'>ERIC KNAPP AKA &quot;MR.CYCLONE&quot;</span>
    <span className='mt-2'>ALAN ZINDMAN</span>
    <span className='mt-2'>IRENE KARAS</span>
    <span className='mt-2'>LEROY McCARTHY</span>
    <span className='mt-2'>MELANIE ABRAMOV</span>
    </div>
    <div className='text-lg md:text-2xl text-center mt-5'>77 Films is a New York City based production company that tells real slice of life stories. Produced by  Kimberly Gray (Bastards of the Party) and Maria Clara (Life on Christopher St)
    </div>
    <div className='text-lg text-center mt-5'>For Sales and Press contact Kimberly Gray at <span className='text-orange underline'>kimberlygray1@gmail.com</span></div>
    <div className='text-lg text-center mt-5'>IG @coneyislandthenandnow
    Copyright 2023(©)</div>
  </section>
</main>
  )
}
