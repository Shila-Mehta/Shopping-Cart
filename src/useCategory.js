import { useState } from "react";

export default function useCategory(){

    const [category,setCategory]=useState('');

    return [category,setCategory];
     
}