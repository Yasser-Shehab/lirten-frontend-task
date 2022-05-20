import axios from "axios";
const API_URL = "http://localhost:4000/api/profile/";

//Create Profile
const createProfile = async (profileData) => {
  const response = await axios.post(API_URL, profileData);

  return response.data;
};

//Get Profiles
const getProfiles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Delete Profile
const deleteGoal = async (profileId) => {
  const response = await axios.delete(API_URL + profileId);

  return response.data;
};
//Get Single Profile
const getSingleProfile = async (profileId) => {
  const response = await axios.delete(API_URL + profileId);

  return response.data;
};
//Edit Profile
const editProfile = async (profileId, profileData) => {
  const response = await axios.put(API_URL + profileId, profileData);

  return response.data;
};

const profileService = {
  createProfile,
  getProfiles,
  deleteGoal,
  getSingleProfile,
  editProfile,
};

export default profileService;
