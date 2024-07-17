import PortfolioCard from "./portfolioCard";

export default function Portfoliolist({portfolioData}) {
  return(
    <div className="portfolio-list">
      {portfolioData.map((item) => (
        <PortfolioCard 
          key={item.id}
          title={item.title}
          projectUrl={item.projectUrl}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}