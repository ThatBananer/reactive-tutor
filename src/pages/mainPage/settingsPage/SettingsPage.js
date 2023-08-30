import React, { useState } from 'react';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth,db } from '../../../services/fireBaseServicer';
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

  function classTakenListMaker(input) {
    // Remove any spaces before or after the input string
    input = input.trim();

    // Split the input string into an array of words using commas as separators
    const wordsArray = input.split(',').map(word => word.trim());

    return wordsArray;
}

  const handleSaveSettings = async (e) => {
    // Perform save settings logic here
    //e.preventDafault()
    await setDoc(doc(db, "Users", auth.currentUser.uid),{
      LastUpdated: serverTimestamp(),
      name: name,
      email: email,
      grade: grade,
      classTakenList: classTakenListMaker(courseId), //classesTakenListValue
      phone: phone,
      contactEmail: contactEmail, //contact email value     
      bio: bio,
      isTutor: showInfoToOthers

    })
    //TODO add update password if different from current

  };

  return (
    <div className='overFlow'>
      <div className="settings-container">
        <h2>Account Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        
        {/* <div className="form-group">
          <label htmlFor="password">Change Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div> */}

        <h2>Grade</h2>
        <div className="form-group">
          <label htmlFor="grade">Select Grade:</label>
          <select id="grade" value={grade} onChange={handleGradeChange}>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="Masters Student">Masters Student</option>
            <option value="Phd Student">Phd Student</option>
            <option value="Graduated">Graduated</option>

          </select>
        </div>
        <hr></hr>
        <h2>List of Classes Taken</h2>
        <div className="form-group">
          <label htmlFor="course-id">Course IDs:</label>
          <p>Please write in the following format.</p>
          <p style={{ color: 'red', fontWeight: 'bold', }}>"classID1, classID2, classID3, classID4, ..."</p>
          <p style={{ fontWeight: 'bold', }} >If it is not written like it is above then your profile will not show up in search</p>
          <input type="text" id="course-id" value={courseId} onChange={handleCourseIdChange} />
        </div>
        <hr></hr>

        <h2>Bio</h2>
        <div className="form-group">
          <textarea id="bio" value={bio} onChange={handleBioChange}></textarea>
        </div>

        {/* <h2>Contact Information</h2>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div> */}
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
    </div>    
  );
};

export default TutorPage;
