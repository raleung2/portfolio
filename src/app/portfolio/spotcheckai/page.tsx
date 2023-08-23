import Image from "next/image"
import {AiFillGithub} from "react-icons/ai"
import Script from 'next/script'

export default function SpotCheckAI() {

  const languages = ["HTML", "CSS", "Python", "Typescript"]
  const frameworks = ["Django", "Django REST", "React.js", "Ionic", "Capacitor"]
  const tools = ["Keras", "TensorFlow", "Git", "Github", "Jira"]

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


      <div id="picture" className="lg:w-3/4">
        <Image src={'/projects/spotcheckai.png'} alt={'spotcheckai'}width={1000} height={1000}></Image>
      </div>
      <div id="text" className="text-left px-2 py-2">

        <div id="title-container">
          <p className="font-semibold text-4xl"> 
            SpotCheckAI
            <a className="mx-2" href="https://github.com/raleung2/SpotCheckAI" target="_blank">
              <AiFillGithub class="inline"/>
            </a>
          </p>
        </div>


        <p className="my-5">A web application that can identify suspicious skin lesions as benign or cancerous. Integrated with OpenAI&apos;s GPT-3.5 Large Language Model (LLM).</p>
        
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
