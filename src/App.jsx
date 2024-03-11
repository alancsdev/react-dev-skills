import './App.css';
import NewSkillForm from './components/NewSkillForm';
import SkillList from './components/SkillList';
import { useState } from 'react';

function App() {
  const [skills, setSkills] = useState([
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ]);

  const handleSkillAdd = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  return (
    <>
      <div className="App">
        <h1 className="teal-text">React Dev Skills</h1>
        <SkillList skills={skills} />
        <hr />
        <NewSkillForm onSkillAdd={handleSkillAdd} />
      </div>
    </>
  );
}

export default App;
