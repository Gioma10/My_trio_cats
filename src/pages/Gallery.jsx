import { useLoaderData } from "react-router-dom";
import FilterGallery from "../components/Gallery/FilterGallery";
import PhotoCard from "../components/Gallery/PhotoCard";

export default function Gallery(){
 const photos= useLoaderData(); 
    return(
        <>
            
                <FilterGallery />
                <div className='border-2 border-red-700 mt-10 grid grid-cols-4 gap-8 px-10'>
                    {photos.map((photo)=>{
                        return (
                            <PhotoCard key={photo.id} name={photo.cat} img={photo.img}/>   
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
