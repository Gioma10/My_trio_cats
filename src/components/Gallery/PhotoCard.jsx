import Photo1 from '../../assets/image/Gallery/photo1.webp'

export default function PhotoCard({name, img}){

    return (
        <div style={{backgroundImage:`url(${img})`}}className='h-72 bg-center bg-cover bg-no-repeat rounded-lg shadow-lg group'  >
            <div className='bg-white/30 hidden group-hover:block backdrop-blur-sm w-full h-full'>
                                
            </div>
        </div>

    )
}

