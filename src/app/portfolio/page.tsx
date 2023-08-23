import PortfolioCard from "@/components/portfolio-card";
import projects from './projects.json'
import Script from 'next/script'

export default function Portfolio() {
  const items = projects

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


      <section id="title">
        <p className="font-semibold text-4xl py-7">Portfolio</p>
      </section>

      <section id="portfolio-cards">
        <PortfolioCard items={items}></PortfolioCard>
      </section>
    </div>

  )
}