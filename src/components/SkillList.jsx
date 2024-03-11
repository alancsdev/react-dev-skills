import SkillListItem from './SkillListItem';
import '../App.css';

const SkillList = (props) => {
  return (
    <>
      <ul className="padding-0">
        {props.skills.map((skill, index) => (
          <SkillListItem key={index} name={skill.name} level={skill.level} />
        ))}
      </ul>
    </>
  );
};

export default SkillList;
