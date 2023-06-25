function tutorListing(profileName, profileBio, profilePic, profileSchool) {
  return <div className="TutorListing">
  <a>
    <div className="tutorPhoto">
      <img src = {profilePic}/>
    </div>
  </a>
  <div class="userInfo">
    <a class="userInfoLink">
      <div class = "info">
        <div id = "tutorBio"> {profileName}</div>
        <div id = "school">{profileSchool}</div>
        <div id = "desc">{profileBio}</div>
      </div>
    </a>
  </div>

</div>
}

export default tutorListing;

