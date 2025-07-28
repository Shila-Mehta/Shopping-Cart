import { Icons } from "../data/icons";

export default function ReviewStars({rating}){
      let stars=[]
     for(let i=0;i<5;i++){
         if(i<rating){
            stars.push(<Icons.Star/>) 
         }
         else{
            stars.push(<Icons.StarEmpty/>)
         }
     }
     return <div className="flex justify-center text-yellow-300 mb-2">{stars}</div>;
}