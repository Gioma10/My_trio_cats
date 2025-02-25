import RandomServiceAnimation from "./RandomServiceAnimation";

export default function Services (){
    return (
        <div className='py-20 text-white'>
            <div className="grid grid-cols-3 w-full items-center py-20">
                <div className="bg-[#3A3A3A] border-y border-l flex col-start-2 col-span-2 flex-col items-center justify-center rounded-l-lg py-10 px-5">
                    <h2 className="text-4xl">I nostri servizi</h2>
                    <p>Abbiamo tante abilità e possiao soddisfarvi per qualsiasi delle seguenti esigenze</p>
                </div>
            </div>
            <div className='grid gird-cols-2'>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam facilis placeat quis tempora, repellat consequuntur porro sequi, animi ex laudantium architecto. Ex rerum facere quidem sint tempore ratione in?</p>
                </div>
                <div>
                    immagine
                </div>
            </div>
        </div>
    )
}