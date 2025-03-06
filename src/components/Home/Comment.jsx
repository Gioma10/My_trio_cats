import Rating from "./Rating";

export default function Comment({name, desc, stars}){

    return (
        <div className="flex flex-col items-center justify-center bg-[#3A3A3A] p-8 rounded-xl gap-8 border w-60 md:w-96">
            <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-xl">{name}</h3>
                <Rating number={stars}/>
            </div>
            <p className="text-sm">{desc.length > 100 ? desc.slice(0, 100) + "..." : desc}</p>
        </div>
    )
}