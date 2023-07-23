import React, { useState } from 'react';
import './SettingsPage.css'





const TutorPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('freshman');
  const [courseId, setCourseId] = useState('');
  const [isTutor, setIsTutor] = useState(false);
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [showInfoToOthers, setShowInfoToOthers] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleTutorStatusChange = (e) => {
    setIsTutor(e.target.checked);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handleShowInfoToOthersChange = (e) => {
    setShowInfoToOthers(e.target.checked);
  };

  const handleSaveSettings = () => {
    // Perform save settings logic here
    console.log('Settings saved!');
  };

  return (
    <div className="settings-container">
      <h2>Account Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>

      <h2>Grade</h2>
      <div className="form-group">
        <label htmlFor="grade">Select Grade:</label>
        <select id="grade" value={grade} onChange={handleGradeChange}>
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="senior">Masters Student</option>
          <option value="senior">Phd Student</option>

        </select>
      </div>

      <h2>List of Classes Taken</h2>
      <div className="form-group">
        <label htmlFor="course-id">Course ID:</label>
        <input type="text" id="course-id" value={courseId} onChange={handleCourseIdChange} />
      </div>

      <h2>Are you willing to be listed as a tutor?</h2>
      <div className="form-group">
        <label htmlFor="tutor-status">
        Yes, I want to be listed as a tutor
          <input type="checkbox" id="tutor-status" checked={isTutor} onChange={handleTutorStatusChange} />
          
        </label>
      </div>

      <h2>Bio</h2>
      <div className="form-group">
        <textarea id="bio" value={bio} onChange={handleBioChange}></textarea>
      </div>

      <h2>Contact Information</h2>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">Contact Email:</label>
        <input type="email" id="contact-email" value={contactEmail} onChange={handleContactEmailChange} />
      </div>

      <h2>Privacy Settings</h2>
      <div className="form-group">
        <label htmlFor="privacy-options">
        Make my information visible to other users
          <input type="checkbox" id="privacy-options" checked={showInfoToOthers} onChange={handleShowInfoToOthersChange} />
        </label>
      </div>

      <button className="save-button" onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default TutorPage;
