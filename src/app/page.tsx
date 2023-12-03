import Image from 'next/image'
import Script from 'next/script'
import OpaqueBox from '@/components/opaque-box'

export default function Home() {
  return (
    <div className='text-center bg-slate-800 text-white'> {/*wrapper*/}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDMTJPV3BS"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-TDMTJPV3BS');
        `}
      </Script>
      
      <section id='welcome' className='pt-7'>
        <p className='font-semibold text-3xl lg:text-4xl'>Rafferty Leung</p>
        <p>———</p>
        <p className='font-medium text-2xl lg:text-3xl'>Software Engineer</p>
        <p className='font-medium text-2xl lg:text-3xl'>and Private Pilot</p>
      </section>

      <section id='contact-button'>
        <a href='mailto:raffertyleung98@gmail.com'>
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-6'
          >
            Let&apos;s Get In Touch
          </button>
        </a>
      </section>

      <section id='synposis' className='grid place-items-center'>
        <OpaqueBox>
          <div id='headshot-container' className='grid place-items-center mx-4 my-4'>
            <Image src={'/headshot.png'} alt='headshot' width={250} height={250}/>
          </div>
          <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
            <p className='font-semibold text-2xl md:text-3xl mb-3'>
              Hello! Nice to meet you!
            </p>
            <p>
              My name is Rafferty Leung and I am a Master of Science student at 
              Pace University studying Computer Science. I also have a Bachelor of Science in 
              Pharmaceutical Chemistry from the University of California, Davis. I currently am 
              working at Sutter Health as a Software Engineer. 
              <br></br><br></br>
              I have a specific interest in technologies related to server-side development, 
              while also being intrigued by the realm of full-stack web development. More 
              recently, I have been working on projects pertaining to artifical intelligence 
              and large language models.
              <br></br><br></br>
              Outside of my studies, you can find me flying in the Northern California area, 
              studying for my next aviation certification, coding my next project, 
              working on my personal vehicle, or taking a stroll in a local park!

            </p>
            </div>
        </OpaqueBox>

        <OpaqueBox>
          <div id='logo-container' className='grid place-items-center mx-4 my-4'>
            <Image src={'/sutter_health.png'} alt='Sutter Health' width={250} height={250}/>
          </div>
          <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
            <p className='font-semibold text-3xl mb-3'>Sutter Health</p>
            <p className='font-semibold mb-2'>October 2023 - Present</p>
            <p>Software Engineer</p>
          </div>
        </OpaqueBox>

        <OpaqueBox>
            <div id='logo-container' className='grid place-items-center mx-4 my-4'>
              <Image src={'/labii.png'} alt='Labii Inc' width={250} height={250}/>
            </div>
            <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
              <p className='font-semibold text-3xl mb-3'>Labii Inc</p>
              <p className='font-semibold mb-2'>October 2022 - October 2023</p>
              <p>Software Engineering Intern</p>
            </div>
        </OpaqueBox>

        <OpaqueBox>
            <div id='logo-container' className='grid place-items-center mx-4 my-4'>
              <Image src={'/intervenn.png'} alt='InterVenn Biosciences' width={250} height={250}/>
            </div>
            <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
              <p className='font-semibold text-3xl mb-3'>InterVenn Biosciences</p>
              <p className='font-semibold mb-2'>June 2022 - October 2022</p>
              <p>Software Product Manager</p>
            </div>
        </OpaqueBox>

        <OpaqueBox>          
            <div id='logo-container' className='grid place-items-center mx-4 my-4'>
              <div className='max-w-xs h-32 xl:h-52 grid place-items-center '>
                <Image src={'/pace.png'} alt='Pace University' width={250} height={250} className=''/>
              </div>
            </div>
            <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
              <p className='font-semibold text-3xl mb-3'>Pace University</p>
              <p className='font-semibold mb-2'>January 2022 - Present</p>
              <p>MS Computer Science</p>
            </div>
        </OpaqueBox>

        <OpaqueBox>
          <div id='logo-container' className='grid place-items-center mx-4 my-4'>
              <Image src={'/faa.png'} alt='Federal Aviation Administration' width={250} height={250}/>
            </div>
            <div id='paragraph-wrapper' className='text-center lg:text-left lg:col-span-3 flex flex-col justify-center mx-4 my-4'>
              <p className='font-semibold text-3xl mb-3'>Private Pilot</p>
              <p className='font-semibold mb-2'>January 2022 - Present</p>
          </div>
        </OpaqueBox>
      </section>
    </div> 
  )
}
