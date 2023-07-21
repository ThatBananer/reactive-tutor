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
                <h4>Data Collection Settings</h4>
                <label>
                Collect Data
                    <input
                    type="checkbox"
                    checked={collectData}
                    onChange={handleDataCollectionToggle}
                    />
                    
                </label>
           

           
                <h4>Location Settings</h4>
                <label>
                Enable Location
                    <input
                    type="checkbox"
                    checked={locationEnabled}
                    onChange={handleLocationToggle}
                    />
                    
                </label>
           

            
                <h4>Email List Opt-in</h4>
                <label>
                  Subscribe to Email List
                    <input
                    type="checkbox"
                    checked={emailListOptIn}
                    onChange={handleEmailListToggle}
                    />
                    
                </label>
            

            
                <button className="saveButton" onClick={styles.handleSaveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default SettingsPage;