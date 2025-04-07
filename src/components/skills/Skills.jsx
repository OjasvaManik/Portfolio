import SkillSection from "./SkillSection.jsx";

export default function Skills () {
    return (
        <div className={'card flex flex-col custom-scrollbar'}>
            <SkillSection title="frontend" category="frontend" />
            <SkillSection title="backend" category="backend" />
            <SkillSection title="database" category="database" />
            <SkillSection title="cloud" category="cloud" />
            <SkillSection title="programming" category="programming" />
        </div>
    );
}