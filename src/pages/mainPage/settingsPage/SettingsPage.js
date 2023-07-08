import React, { useState } from 'react';
import styles from './SettingsPage.module.css'

function SettingsPage(){
    const [collectData, setCollectData] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [emailListOptIn, setEmailListOptIn] = useState(true);

  const handleDataCollectionToggle = () => {
    setCollectData(!collectData);
  };

  const handleLocationToggle = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleEmailListToggle = () => {
    setEmailListOptIn(!emailListOptIn);
  };

  const handleSaveChanges = () => {
    // Perform actions to save the settings
    // e.g., make an API call, update database, etc.
    console.log('Settings saved!');
  };

    return(
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2>Data Collection Settings</h2>
                <label>
                    <input
                    type="checkbox"
                    checked={collectData}
                    onChange={handleDataCollectionToggle}
                    />
                    Collect Data
                </label>
           

           
                <h2>Location Settings</h2>
                <label>
                    <input
                    type="checkbox"
                    checked={locationEnabled}
                    onChange={handleLocationToggle}
                    />
                    Enable Location
                </label>
           

            
                <h2>Email List Opt-in</h2>
                <label>
                    <input
                    type="checkbox"
                    checked={emailListOptIn}
                    onChange={handleEmailListToggle}
                    />
                    Subscribe to Email List
                </label>
            

            
                <button className="saveButton" onClick={styles.handleSaveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default SettingsPage;