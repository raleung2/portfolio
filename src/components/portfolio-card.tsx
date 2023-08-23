import React from "react";
import Image from "next/image";

interface Item {
  imagePath: string;
  projectTitle: string;
  projectDescription: string;
}

interface ItemListProps {
  items: Item[]
}

const PortfolioCard: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="grid place-items-center">
          <Image 
            src={item.imagePath} 
            alt={item.projectTitle} 
            width={0} 
            height={0} 
            sizes="100vw" 
            style={{ width: 'auto', height: '200px'}}
            className="mt-2"/>
          <h3 className="text-xl font-semibold">{item.projectTitle}</h3>
          <p className="w-3/4 mb-5">{item.projectDescription}</p>
        </div>
      ))}
    </div>
  );
};


export default PortfolioCard;