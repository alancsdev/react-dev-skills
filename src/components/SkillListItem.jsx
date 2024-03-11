import './SkillListItem.css';

const SkillListItem = (props) => {
  return (
    <>
      <li className="SkillListItem">
        {props.name} <span className="level">LEVEL {props.level}</span>
      </li>
    </>
  );
};

export default SkillListItem;
