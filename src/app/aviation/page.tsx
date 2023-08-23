import Image from "next/image"
import Script from 'next/script'

export default function Aviation() {
  return (
    <div className='text-center bg-slate-800 text-white min-h-[calc(100vh-140px)] '> {/*wrapper*/}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDMTJPV3BS"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-TDMTJPV3BS');
        `}
      </Script>

      <section id="title" className="grid justify-items-center">
        <p className="font-semibold text-4xl py-7">Aviation</p>
        <div className="grid justify-items-center my-4">
          <Image src={'/plane.jpg'} alt={'etchasketch'}width={400} height={400}></Image>
        </div>
        <p className="font-semibold text-2xl">About</p>
        <div className="max-w-sm my-2">
          <p>I am a private pilot based out of the San Francisco Bay Area. I am certified in airplane single engine land (ASEL) type planes. Currently I am working on obtaining my advanced ground instructor (AGII) certification and instrument pilot rating.</p>
        </div>
        <p className="font-semibold text-2xl">Helpful and Recommended Links:</p>
        <a href='https://kingschools.com/private-pilot-certificate' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-2'
          >
            Ground School
          </button>
        </a>
        <a href='https://asa2fly.com/private-pilot-oral-exam-guide-thirteenth-edition/' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-2'
          >
            Private Pilot Terminology
          </button>
        </a>
        <a href='http://www.ecfr.gov/cgi-bin/text-idx?c=ecfr&sid=40760189a03dfea0b501608f33820a45&rgn=div5&view=text&node=14:2.0.1.1.2&idno=14' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-2'
          >
            14 CFR Part 61
          </button>
        </a>
        <a href='http://www.ecfr.gov/cgi-bin/text-idx?c=ecfr&sid=3efaad1b0a259d4e48f1150a34d1aa77&rgn=div5&view=text&node=14:2.0.1.3.10&idno=14' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-2'
          >
            14 CFR Part 91
          </button>
        </a>
        <a href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-H/part-141' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-2'
          >
            14 CFR Part 141
          </button>
        </a>


      </section>
    </div>
  )
}