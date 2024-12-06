import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const contextAnimals = createContext()

export const AnimalsProvider = ({children})=>{
  const [animals, setAnimals] = useState([])

  const animalReceive = async (query) => {
      try {
        const res = await axios.get('http://localhost:3001/animals', {params:query});
        console.log(res.data); 
        setAnimals(res.data)
      } catch (error) {
        console.error("Помилка:", error);
      }
      
    };

  useEffect(()=>{
    animalReceive()
  },[])

  const value = {
      animalReceive,
      animals
    }
  return (
    <contextAnimals.Provider value={value}>
      {children}
    </contextAnimals.Provider>
  )  
}
