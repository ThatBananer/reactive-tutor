import React, { useState } from 'react';
import './ProfileSetup.css'
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../services/fireBaseServicer';
import { User } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';






const ProfileSetup = () => {
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

  // navigtor to next page in proccess
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

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

  const {currentUser} = useContext(AuthContext)

  

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
      AccountCreated: serverTimestamp(),
      name: name,
      email: email,
      grade: grade,
      classTakenList: classTakenListMaker(courseId), //classesTakenListValue
      phone: phone,
      contactEmail: contactEmail, //contact email value     
      bio: bio

    })
    navigate("/main")

  };

  return (
    <div className='overFlow'>
      <div className="settings-container">
        <h2>BLANK logo</h2>
      <h2>BLANK Account Creation</h2>
        <h2>Account Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
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
            By checking this box I acknowledge I understand I  will have my profile displayed on BLANK
            <input type="checkbox" id="privacy-options" checked={showInfoToOthers} onChange={handleShowInfoToOthersChange} />
          </label>
        </div>
        <Link to =''>
            <button className="save-button" onClick={handleSaveSettings}>Save and Continue</button>
        </Link>
      </div>
    </div>    
  );
};

export default ProfileSetup;
