import SingleSkill from "./SingleSkill"
import { lucySkills, kyouSkills, monaSkills } from "./skills"

export default function ProgressSkills({cat}){

    let skills= [];

    if(cat === 'Lucy'){
        skills = [... lucySkills]
    } else if(cat === 'Kyou'){
        skills = [...kyouSkills]
    } else if(cat === 'Mona'){
        skills = [...monaSkills]
    }

    return (
        <div className="flex flex-col gap-4 justify-center">
            {skills.map((skill, index)=>{
                return (
                    <SingleSkill key={index} title={skill.title} percentage={skill.progress}/>
                )
            })}
        </div>
    )
}