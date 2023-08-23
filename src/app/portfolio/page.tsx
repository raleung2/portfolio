import PortfolioCard from "@/components/portfolio-card";
import projects from './projects.json'

export default function Portfolio() {
  const items = projects

  return (
    <div className='text-center bg-slate-800 text-white'> {/*wrapper*/}
      <section id="title">
        <p className="font-semibold text-4xl pt-7">Portfolio</p>
      </section>

      <section id="portfolio-cards">
        <PortfolioCard items={items}></PortfolioCard>
      </section>
    </div>

  )
}