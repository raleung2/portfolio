export default function Resume() {
  return (
    <div className="text-center bg-slate-800 text-white min-h-[calc(100vh-134px)]">
      <section id="title">
        <p className="font-semibold text-4xl pt-7">Resume</p>
      </section>

      <section id="resume-viewer">
      <div className="hidden lg:block pt-7">
        <div className="grid place-items-center">
          <iframe 
            id='resume' 
            title='Resume'
            width='50%'
            height='500px'
            allow="autoplay"
            src="https://drive.google.com/file/d/1YFPkcgPBrrw5uzphhXbehhWnD965cqfo/preview">
          </iframe>
        </div>
      </div>
      <div className="grid place-items-center lg:hidden">
        <iframe 
          id='resume' 
          title='Resume'
          width='100%'
          height='500px'
          allow="autoplay"
          src="https://drive.google.com/file/d/1YFPkcgPBrrw5uzphhXbehhWnD965cqfo/preview"></iframe>
      </div>
      </section>

      <section id='contact-button'>
        <a href='https://docs.google.com/document/d/1gdVV6mwIObWozaaOPpYZpFVuJKoX70DK/edit?usp=sharing&ouid=116070096555204968677&rtpof=true&sd=true' target="_blank">
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-6'
          >
            Open Resume in a New Window
          </button>
        </a>
      </section>
      
    </div>
  )
}
