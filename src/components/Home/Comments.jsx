import { motion } from "motion/react";

import Comment from "./Comment";

export default function Comments() {

    const users=[
           
        {name: 'Dario', stars: 5, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis illo! Suscipit, voluptatibus quo! Expedita, voluptas. Numquam quaerat, amet necessitatibus aperiam, accusantium unde ipsa odit assumenda quo quasi dolore ea.'},
        {name: 'Giovanni', stars: 5, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis illo! Suscipit, voluptatibus quo! Expedita, voluptas. Numquam quaerat, amet necessitatibus aperiam, accusantium unde ipsa odit assumenda quo quasi dolore ea.'},
        {name: 'Giulia', stars: 5, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis illo! Suscipit, voluptatibus quo! Expedita, voluptas. Numquam quaerat, amet necessitatibus aperiam, accusantium unde ipsa odit assumenda quo quasi dolore ea.'},
        {name: 'Piero', stars: 5, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis illo! Suscipit, voluptatibus quo! Expedita, voluptas. Numquam quaerat, amet necessitatibus aperiam, accusantium unde ipsa odit assumenda quo quasi dolore ea.'},
        {name: 'Luca', stars: 5, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis illo! Suscipit, voluptatibus quo! Expedita, voluptas. Numquam quaerat, amet necessitatibus aperiam, accusantium unde ipsa odit assumenda quo quasi dolore ea.'},
    ]

    return (
        <div className="text-white my-28 ">
            <div className="flex gap-5">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease:'linear',  duration: 20, repeat: Infinity }}
                    className="flex gap-5">
                    {users.map((user, index)=>{
                        return (
                            <Comment key={index} name={user.name} desc={user.desc} stars={user.stars}/>
                        )
                    })}
                </motion.div>
                <motion.div 
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ease:'linear', duration: 20, repeat: Infinity }}
                    className="flex gap-5">
                    {users.map((user, index)=>{
                        return (
                            <Comment key={index} name={user.name} desc={user.desc} stars={user.stars}/>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    );
}
