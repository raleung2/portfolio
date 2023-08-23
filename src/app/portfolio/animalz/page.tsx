import Image from "next/image"
import { AiOutlineLink } from "react-icons/ai"


export default function Animalz() {

  const languages = ["HTML", "CSS", "Typescript", "Javascript"]
  const frameworks = ["React.js", "Ionic", "Cordova", "Capacitor"]
  const tools = ["Axios", "APIs"]

  return(
    <div className='text-center bg-slate-800 text-white min-h-[calc(100vh-134px)] grid lg:grid-cols-2 place-items-center'> {/*wrapper*/}

      <div id="picture" className="lg:w-3/4 grid justify-items-center">
        <Image src={'/projects/animalz.png'} alt={'animalz'}width={200} height={200}></Image>
      </div>
      <div id="text" className="text-left px-2 py-2">

        <div id="title-container">
          <p className="font-semibold text-4xl"> 
            Animalz
            <a className="mx-2" href="https://raleung2-portfolio-animalz.web.app/" target="_blank">
              <AiOutlineLink class="inline"/>
            </a>
          </p>
        </div>


        <p className="my-5">An application that teaches kids different animal sounds as well as displaying random facts about cats and dogs on a phone shake.</p>
        
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
