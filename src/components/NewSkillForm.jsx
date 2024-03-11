import './NewSkillForm.css';

const NewSkillForm = () => {
  return (
    <>
      <form action="" className="NewSkillForm">
        <label htmlFor="skill">Skill</label>
        <input type="text" name="skill" />
        <label htmlFor="level">Level</label>
        <select name="level" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>ADD SKILL</button>
      </form>
    </>
  );
};

export default NewSkillForm;
