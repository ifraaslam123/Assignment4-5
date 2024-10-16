import Link from "next/link"
import Image from "next/image"

export default function Responsive () {
    return (
      <div className="parentcontainer">
        
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">  
          <h1 className="tittle">Blog Page 1</h1>
          <p className="description">
              Its About Benefits of "Oranges"..
          </p> {""}
         <Link href={"/detail1"}><button className="readmore">Read More</button></Link> 
          </div>
           </div>
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">
          <h1 className="tittle">Blog Page 2</h1>
         
          <p className="description">
              Here are some benefits of "Mangoes"
          </p> {""}
          <Link href={"/details2"}><button className="readmore">Read More</button></Link>
          </div>
          </div>
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">
          <h1 className="tittle">Blog Page 3</h1>
          <p className="description">
              Healthy Benefits Of "Bananas"
          </p> {""}
         <Link href={"/detail3"}> <button className="readmore">Read More</button></Link>
          </div>
          </div>
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">
              <h1 className="tittle">Blog Page 4</h1>
              <p className="description">
                "Benefits Of Strawberries"
              </p> {""}
             <Link href={"/detail4"}> <button className="readmore">Read More</button></Link> 
              </div>
          </div>
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">
                
              <h1 className="tittle">Blog Page 5</h1>
              <p className="description">
                    "Benefits Of WaterMelon"
              </p> {""}
              <Link href={"/detail5"}><button className="readmore">Read More</button></Link>
              </div>
          </div>
          <div className="childcontainer bounce-in-right">
              <div className="imagecontainer">
                
              <h1 className="tittle">Blog Page 6</h1>
              <p className="description">
                    "Benefits Of Dragon Fruits"
              </p> {""}
              <Link href={"/detail6"}><button className="readmore">Read More</button></Link>
              </div>
              </div> 
      </div>
    ) 
  }
