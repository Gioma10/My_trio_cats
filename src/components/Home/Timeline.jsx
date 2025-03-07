import Event from "./Event";

export default function Timeline() {

    const habits = [
        { direction: 'left', time: '08:30 / 9:00 ' , h3: '- Colazione', p: 'Ci svegliamo e facciamo colazione' },
        { direction: 'right', time: '9:00 / 12:00 ', h3: '- Riposo', p: 'Pausa relax per digerire e riprendere le forze' },
        { direction: 'left' , time: '12:00 / 13:30 ', h3: '- Ispezione', p: "Ispezione cucina e controllo qualita' del cibo" },
        { direction: 'right' , time: '13:30 / 14:00 ', h3: '- Pranzo', p: 'Ci godiamo il pranzo con gusto' },
        { direction: 'left' , time: '14:00 / 16:30 ', h3: '- Riposo', p: 'Digeriamo e ci prendiamo una pausa dalla giornata stressante' },
        { direction: 'right' , time: '16:30 / 17:30 ', h3: '- Allenamento', p: 'Parkour e lotta in giro per la casa' },
        { direction: 'left' , time: '17:30 / 20:00 ', h3: '- Riposo', p: "Riposo assoluto dovuto all'allenamento" },
        { direction: 'right' , time: '20:00 / 21:30 ', h3: '- Ispezione', p: 'Fissiamo i nostri genitori cucinare nella speranza di avere qualcosa' },
        { direction: 'left' , time: '21:30 / 8:30 ', h3: '- Frenesia', p: 'Alterniamo pisolini a corse sfrenate' },
    ];

    return (
        <div className="relative h-screen overflow-hidden flex justify-center text-white">
            
            {/* Contenitore Scrollabile */}
            <div className="h-full w-full overflow-y-auto scrollbar-hide px-4 py-8">
                
                {/* Contenitore della Timeline */}
                <div className="relative flex flex-col items-center">
                    
                    {/* Linea centrale */}
                    <div className="absolute w-1 bottom-0 top-0 bg-white left-1/2 transform -translate-x-1/2" />

                    {/* Eventi della Timeline */}
                    <div className="flex flex-col gap-10">
                            {habits.map((habit, index) => (
                                <Event key={index} direction={habit.direction} time={habit.time} h3={habit.h3} p={habit.p} />
                            )
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
