import Event from "./Event";

export default function Timeline() {
    const habits = [
        { direction: 'left', h3: '08:30 / 9:00 - Colazione', p: 'Ci svegliamo e facciamo colazione' },
        { direction: 'right', h3: '9:00 / 12:00 - Riposo', p: 'Pausa relax per digerire e riprendere le forze' },
        { direction: 'left', h3: '12:00 / 13:30 - Ispezione', p: "Ispezione cucina e controllo qualita' del cibo" },
        { direction: 'right', h3: '13:30 / 14:00 - Pranzo', p: 'Ci godiamo il pranzo con gusto' },
        { direction: 'left', h3: '14:00 / 16:30 - Riposo', p: 'Digeriamo e ci prendiamo una pausa dalla giornata stressante' },
        { direction: 'right', h3: '16:30 / 17:30 - Allenamento', p: 'Parkour e lotta in giro per la casa' },
        { direction: 'left', h3: '17:30 / 20:00 - Riposo', p: "Riposo assoluto dovuto all'allenamento" },
        { direction: 'right', h3: '20:00 / 21:30 - Ispezione', p: 'Fissiamo i nostri genitori cucinare nella speranza di avere qualcosa' },
        { direction: 'left', h3: '21:30 / 8:30 - Frenesia', p: 'Alterniamo pisolini a corse sfrenate' },
    ];

    return (
        <div className="relative h-screen overflow-hidden flex justify-center text-white">
            {/* Contenitore Scrollabile */}
            <div className="h-full w-full overflow-y-auto scrollbar-hide px-4 py-8">
                
                {/* Contenitore della Timeline */}
                <div className="relative flex flex-col items-center min-h-full">
                    
                    {/* Linea centrale */}
                    <div className="absolute w-1 bg-white top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

                    {/* Eventi della Timeline */}
                    <div className="flex flex-col gap-10">
                        {habits.map((habit, index) => (
                            <Event key={index} direction={habit.direction} h3={habit.h3} p={habit.p} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
