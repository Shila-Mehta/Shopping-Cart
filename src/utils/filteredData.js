 export  const filteredData=(category ,data)=>{
    console.log(data);
   return data.filter((item)=> item.category===category);
}


