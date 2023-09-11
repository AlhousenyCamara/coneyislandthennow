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
        <div className="inset-0 rounded-lg flex items-center justify-center mt-8">
      <video width="1020" height="240" controls poster="thumbnail.png">
        <source src="t.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='mt-10 text-2xl md:text-6xl text-center font-coney'>“Coney Island Then and Now” </div>
    <div className='text-lg md:text-2xl text-center mt-5 md:mt-8'> Tells the story of one of the most magical places in the world. Not exactly Disney World.. This gritty documentary film shows the evolution of Coney Island, Brooklyn’s famous beachfront Amusement Park which has made many transformations over the years. From visionary George Tilyou’s Steeplechase amusement park  to land baron Fred Trump’s controversial Trump Village, and now rapper and Coney Island native Gorilla Nems is changing things with the times. </div>
    <div className='text-lg md:text-2xl text-center mt-5'> There are many stories in this very mixed community made up of Russians, Latinos, Asians, and African Americans creating an interesting dichotomy where old Coney Island and new collide with gentrification and a booming real estate market. Even if you have never been to Coney Island its iconic symbols like the Wonder Wheel, The Cyclone, Nathan’s Hot Dogs, The Mermaid Parade, Graffiti Walk, and Coney Island USA Sideshow will be. This is a special place and a story that must be told.</div>
    <div className='text-2xl md:text-5xl text-center mt-5 mb-8 text-orange'>3 Avenues 21 blocks infinite stories.</div>
    <div className='text-2xl md:text-4xl text-center font-coney'>“Coney Island Then and Now” </div>
      <div className="flex justify-center mt-5">
    <img src="post1.jpeg" alt="Flyer 1" className="w-1/3 mx-2"/>
    <img src="post2.png" alt="Flyer 2" className="w-1/3 mx-2"/>
  </div>
    <div className='flex flex-row justify-center text-2xl md:text-2xl text-center mt-5 mb-8 text-white'>
      <span className='mr-8'>Produced By: KIMBERLY GRAY </span>
      <span> Directed By: MARIA CLARA</span>
    </div>
    <div className='text-2xl md:text-4xl text-center text-orange font'>Starring: GORILLA NEMS DANIELLE MASTRION XAVIER FRANKS DICK ZIGUN WENDY BLADES BRENDAN SCHWEDA ERIC KNAPP AKA &quot;MR.CYCLONE&quot; ALAN ZINDMAN
    IRENE KARAS LEROY McCARTHY MELANIE ABRAMOV
    </div>
    <div className='text-lg md:text-2xl text-center mt-5'>77 Films is a New York City based production company that tells real slice of life stories. Produced by  Kimberly Gray (Bastards of the party) and Maria Clara (Life on Christopher Street)
    </div>
    <div className='text-lg md:text-2xl text-center mt-5'>“Coney Island: Then and Now” is a documentary film about the evolution of Coney Island, Brooklyn’s famous beachfront Amusement Park which has made many transformations over the years. The film details the history and nostalgia of Coney Island’s boardwalk, including the iconic landmarks the Wonder Wheel, Cyclone, Nathan’s Hot Dogs, The Mermaid Parade, Graffiti Walk, and Coney Island USA Sideshow.</div>
    <div className='text-lg text-center mt-5'>For Sales and Press contact Kimberly Gray at <span className='text-orange underline'>kimberlygray1@gmail.com</span></div>
    <div className='text-lg text-center mt-5'>IG @coneyislandthenandnow
    Copyright 2023(©)</div>
  </section>
</main>
  )
}
