import ReviewStars from "./ReviewStars"
export default function Reviews({review}){

    return(
        <div className=" p-2  shadow-xl  w-85  h-42 mb-5  bg-purple-600 text-white text-md  font-bold   transition duration-300 ease-in-out hover:translate-y-2  ">
        <div className="flex  gap-10">
         <div className="w-8 h-8  rounded-full bg-yellow-400 flex  justify-center  items-center">{review.name.slice(0,1)}</div>
          <p>{review.name}</p>
        </div>
         <ReviewStars key={review.id} rating={review.rating}/>
         <p>{review.review}</p>
       </div>
    
    )
}