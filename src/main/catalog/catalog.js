import FiltersButtons from "./FilteringTab/filterTab.js";
import { AnimalsProvider } from "../../data/dataRecive.js";
import { CardDisplay } from "./card/cardDisplay.js";




export const Catalog = () => {
    return (
         <AnimalsProvider>
            <FiltersButtons />
            <CardDisplay />
        
        </AnimalsProvider>
         
       
        

    )
}