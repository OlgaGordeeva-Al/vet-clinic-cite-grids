import CardList from "../../UI/CardList";
import HorizontalCard from "../../UI/HorizontalCard"
import BackbroundCardList from "../../UI/BackgroundCardList"
import "./index.css";
import { useState, useEffect, ReactElement } from "react";

interface Values {
  name: string,
  price: number
}

interface Prices {
  cardName: string,
  values : Values[],
  cardImage: string
}

const PriceList = () => {
  const [prices, setData] = useState<Prices[]>([]);
  const [error, setError] = useState<string | null>();
  const [ActiveComponent, setActiveComponent] = useState<string>("CardList")


  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/api/price');
      const data: Prices[] = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  }
  fetchData();
  }, []);


let SomeComponent = CardList;

const handleOnClick = (name: string) => {
  setActiveComponent(name);
  console.log(ActiveComponent);
  if (ActiveComponent=== "CardList") {
    SomeComponent = CardList;
  } else if (ActiveComponent === "HorizontalCard") {
    SomeComponent = HorizontalCard;
  } else {
    SomeComponent = BackbroundCardList;
    console.log(SomeComponent);
  }
};


const PricePageContent = prices.map((item) => <SomeComponent cardContent={item} key={item.cardName + item.values.length} />);

const PricePage = prices.map((item) => <CardList cardContent={item} key={item.cardName + item.values.length} />);

const PricePageHorisontal = prices.map((item) => <HorizontalCard cardContent={item} key={item.cardName + item.values.length} />);

const BackgroundPriceList = prices.map((item) => <BackbroundCardList cardContent={item} key={item.cardName + item.values.length} />);

  return (
    <div className="price-page">
      <h4 className="page-header price-page__header">Our prices</h4>
      {/* {PricePageContent} */}

      <div className="price-page__content">
        {PricePage}
      </div>
      {/* <div className="horizontal-pricelist">
        {PricePageHorisontal}
      </div>
      <div className="background-pricelist">
        {BackgroundPriceList}
      </div> */}
      {/* <div className="priselist-tab">
        <p onClick={() => handleOnClick("CardList")}>Vertical cards</p>
        <p onClick={() => handleOnClick("HorizontalCard")}>Horizontal cards</p>
        <p onClick={() => handleOnClick("BackbroundCardList")}>List with bg</p>
      </div> */}
    </div>
  )
}

export default PriceList;
