import { reviews } from "../data/review";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./footer";
import Hero2 from "./hero2";
import NavBar from "./navBar";
import Reviews from "./reviews";



function Home(){
    return(
        <div>
            <NavBar/>
            <Hero2/>
              <FeaturedProducts/>
             <h1 className="text-center mb-4  text-purple-700 font-bold text-2xl  shadow-sm">What our Cutomers Say</h1>
             <div className=" flex flex-col items-center justify-around shadow-sm mb-5 lg:flex-row  md:flex-row ">
              {reviews.map(review=> <Reviews key={review.id} review={review} />)}
             </div>
            <Footer/>

             
        </div>
    ) 
}


export default Home;