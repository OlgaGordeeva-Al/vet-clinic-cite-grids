import "./index.css"
import { servicesData } from "../../../mockData/about-page-data"
import Card from "../../UI/Card"


function AboutUs() {
  const cardBlock = servicesData.map(item => <Card cardImage={item.svg} cardHeader={item.header} cardDescription={item.text}></Card>)

    return (
      <>
        <div className="about">
          <div className="about-text">
            <h4 className="about-text__head">Welcome to our brand new clinic!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae rerum sint, laboriosam officia iusto illo exercitationem dolore dolorum quidem, quas commodi minima pariatur ad corporis facere saepe perspiciatis laudantium:
            </p>
          </div>
          <img src="images\cat-about.jpg" alt="cat" className="about-img" />
        </div>
        <div className="departments-head">
          <h4 className="about-text__head">
            Our departments available now!
          </h4>
        </div>
        <div className="about-services">
          { cardBlock }
        </div>
      </>
    );
  }

export default AboutUs;