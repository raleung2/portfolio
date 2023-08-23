import Image from "next/image"
import { AiOutlineLink } from "react-icons/ai"


export default function OpArt() {

  const languages = ["HTML", "CSS", "Javascript"]
  const tools = ["Canvas API", "Device Motion Events"]

  return(
    <div className='text-center bg-slate-800 text-white min-h-[calc(100vh-134px)] grid lg:grid-cols-2 place-items-center'> {/*wrapper*/}

      <div id="picture" className="lg:w-3/4">
        <Image src={'/projects/opart.png'} alt={'opart'}width={1000} height={1000}></Image>
      </div>
      <div id="text" className="text-left px-2 py-2">

        <div id="title-container">
          <p className="font-semibold text-4xl"> 
            OpArt
            <a className="mx-2" href="https://webpage.pace.edu/RL29352N/projects/op-art/" target="_blank">
              <AiOutlineLink class="inline"/>
            </a>
          </p>
        </div>


        <p className="my-5">A website that utilizes the device&apos;s accelerometer to display interactive op art. Art inspiration from Bridget Riley.</p>
        
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