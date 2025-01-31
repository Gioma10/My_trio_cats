import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import FilterGallery from "../components/Gallery/FilterGallery";
import PhotoCard from "../components/Gallery/PhotoCard";


export default function Gallery(){
    const [pressBtn, setPressBtn]=useState({
             lucy: true,
             kyou: true,
             mona: true,
         })
 const photos= useLoaderData(); 
     function handlePressBtn(identifer){
        setPressBtn(prevBtn => {
            return {
                ...prevBtn,
                [identifer]: !prevBtn[identifer],
            }
        })
    }
    // console.log(pressBtn);

    

    return(
        <>
            
                <FilterGallery handleSelectBtn={handlePressBtn} selectBtn={pressBtn}/>
                <div className='mt-10 rounded-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10'>
                    {photos.map((photo)=>{
                        return (
                            <PhotoCard 
                                key={photo.id} 
                                cat={photo.firstCat} 
                                cat2={photo.secondCat} 
                                cat3={photo.thirdCat} 
                                img={photo.img} 
                                whoActive= {pressBtn}
                            />   
                        )
                    })}
                </div>
            
        </>
    )
}

// Loader function 
export const photosLoader = async ()=>{
    const res= await fetch('http://localhost:4000/gallery');
    return res.json();
}

// console.log(photosLoader());
