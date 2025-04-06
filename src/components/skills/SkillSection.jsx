import skills from "../../data/skills.js";
import SkillCard from "./SkillCard.jsx";

const SkillSection = ({ title, category }) => {
    const filteredSkills = skills.filter(skill => skill.category === category)

    return (
        <div className="my-10 mr-10">
            <h1 className="text-amber-500 text-4xl ml-20 w-[60vh]">{category}</h1>
            <hr className="ml-20 mb-4 text-amber-500 w-[185vh]" />
            <div className="flex flex-wrap gap-4 ml-20">
                {filteredSkills.map(skill => (
                    <SkillCard key={skill.id} {...skill} />
                ))}
            </div>
        </div>
    )
}

export default SkillSection
