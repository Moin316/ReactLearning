import React from "react";

function Card() {
  const data = [
    {
      url: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww",
      name: "Bread and Pastries",
      description:
        "Our bakery offers a wide variety of traditional French bread and pastries.",
        instock:true,
    },
    {
      url: "https://images.unsplash.com/photo-1590599145008-e4ec48682067?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9ufGVufDB8fDB8fHww",
      name: "Chocolate Cake",
      description:
        "Our bakery offers a wide variety of traditional French chocolate cakes.",
        instock:true,
    },
    {
      url: "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "French Pastry",
      description:
        "Our bakery offers a wide variety of traditional French pastries.",
      instock:false,
    },
  ];
  function call(){
    console.log("work")
  }
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10 bg-slate-600">
      {data.map((element, index) => (
        <div key={index} className="w-56 bg-white rounded-md overflow-hidden">
          <div className="h-32 w-full ">
            <img className="w-full h-full object-cover" src={element.url}></img>
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold"> {element.name}</h2>
            <p className="text-xs mt-5">{element.description}</p>
            <button onMouseOver={call} className={`mt-3 px-4 py-1 rounded text-xs ${element.instock ? "bg-blue-600" : "bg-red-800"}`}> 
            {element.instock ? "Instock" : "out of stock" }
            </button>
          </div>
        </div>
      ))} 
    </div>
  );
}

export default Card;
