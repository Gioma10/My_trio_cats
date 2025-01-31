import { useState } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

export default function PhotoCard({whoActive, cat, cat2, cat3, img}){
    const [bigPhoto, setBigPhoto]= useState(false)

    function handleGlass(){
        setBigPhoto(prevState => !prevState);
    }

    // if(whoActive[name]=== true){
    //     console.log('Ci sono solo foto di', name);
        
    // }
    


    return (
        <>
        {((whoActive[cat] === true || !cat) && (whoActive[cat2] === true || !cat2) && (whoActive[cat3] === true || !cat3)) &&
            <div style={{backgroundImage:`url(${img})`}}className='h-72 bg-center bg-cover bg-no-repeat rounded-lg shadow-lg group'  >
                <div className='bg-white/30 hidden group-hover:flex backdrop-blur-sm w-full h-full justify-center items-center'>
                    <HiMagnifyingGlassPlus onClick={handleGlass} className="text-4xl cursor-pointer hover:text-zinc-50"/>
                </div>
            </div>
        }
            
            {bigPhoto && 
                <div className="fixed flex justify-center items-center h-screen w-screen top-0 left-0 bg-black/30">
                    <div style={{backgroundImage:`url(${img})`}} className="h-5/6 w-5/6 bg-cover bg-center bg- bg-no-repeat rounded-lg shadow-lg relative">
                        <IoIosClose onClick={handleGlass}  className="absolute -top-4 -right-4 text-4xl  rounded-lg bg-white cursor-pointer"/>
                    </div>
                </div>
            }
        </>

    )
}

