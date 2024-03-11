import { useState } from 'react';
import './NewSkillForm.css';

const NewSkillForm = (props) => {
  const [formData, setFormData] = useState({ name: '', level: '1' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSkillAdd(formData);
    setFormData({ name: '', level: '1' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="NewSkillForm">
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="level">Level</label>
        <select name="level" value={formData.level} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    </>
  );
};

export default NewSkillForm;
