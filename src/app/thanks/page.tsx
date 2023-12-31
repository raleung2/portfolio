import Script from 'next/script'

export default function Thanks() {
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

      <section id="title">
        <p className="font-semibold text-4xl pt-7">Message Sent!</p>
        <p className="font-semibold text-xl my-2">I will get back to you as soon as possible.</p>
      </section>

      <section id='return-button'>
        <a href='/'>
          <button 
            className=' transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-6'
          >
            Return to Home
          </button>
        </a>
      </section>
    </div>
  )
}