import Image from "next/image"
import { AiOutlineLink } from "react-icons/ai"
import Script from 'next/script'

export default function AccidentMe() {

  const languages = ["HTML", "CSS", "Javascript"]
  const frameworks = ["React.js", "Ionic", "Cordova", "Capacitor"]
  const tools = ["Web APIs"]

  return(
    <div className='text-center bg-slate-800 text-white min-h-[calc(100vh-134px)] grid lg:grid-cols-2 place-items-center'> {/*wrapper*/}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDMTJPV3BS"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-TDMTJPV3BS');
        `}
      </Script>


      <div id="picture" className="lg:w-3/4 grid justify-items-center">
        <Image src={'/projects/accidentme.png'} alt={'accidentme'}width={200} height={200}></Image>
      </div>
      <div id="text" className="text-left px-2 py-2">

        <div id="title-container">
          <p className="font-semibold text-4xl"> 
            Accident.Me
            <a className="mx-2" href="https://raleung2-portfolio-accident-me.web.app/" target="_blank">
              <AiOutlineLink class="inline"/>
            </a>
          </p>
        </div>


        <p className="my-5">A web application that enables users to capture and log specific details when in an automobile accident.</p>
        
        <p className="font-semibold text-2xl">Technologies Used:</p>

        <div id="programming-languages" className="grid md:grid-cols-3">
          <p className="inline-block">Programming Languages:</p>

          <div className="md:col-span-2 my-1">
            {languages.map((language, index)  =>(
                <div className="inline-block px-4 py-2 mx-2 my-1 rounded-full bg-cyan-600 hover:bg-cyan-600/50" key={index}>
                  <p>{language}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div id="frameworks" className="grid md:grid-cols-3">
          <p className="inline-block">Frameworks:</p>

          <div className="md:col-span-2 my-1">
            {frameworks.map((framework, index)  =>(
                <div className="inline-block px-4 py-2 mx-2 my-1 rounded-full bg-cyan-700 hover:bg-cyan-700/50" key={index}>
                  <p>{framework}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div id="tools" className="grid md:grid-cols-3">
          <p className="inline-block">Tools:</p>

          <div className="md:col-span-2 my-1">
            {tools.map((tool, index)  =>(
                <div className="inline-block px-4 py-2 mx-2 my-1 rounded-full bg-cyan-800 hover:bg-cyan-800/50" key={index}>
                  <p>{tool}</p>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
      
    </div>
  )
}