import ReviewStars from "./ReviewStars"
export default function Reviews({review}){

    return(
        <div className=" p-2  shadow-xl  w-55  lg:w-85  h-33 lg:h-42 mb-5  bg-purple-600 text-white   text-sm lg:text-md  font-bold   transition duration-300 ease-in-out hover:translate-y-2  ">
        <div className="flex  gap-10">
         <div className="size-5 lg:size-8 rounded-full bg-yellow-400 flex  justify-center  items-center">{review.name.slice(0,1)}</div>
          <p className="    text-[13px] sm:text-sm lg:text-xl">{review.name}</p>
        </div>
         <ReviewStars rating={review.rating}/>
         <p className="text-[12px] lg:text-[15px]">{review.review}</p>
       </div>
    
    )
}