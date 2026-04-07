import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

const client = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProfile = () => client.get('/profile/');
export const getProjects = (params) => client.get('/projects/', { params });
export const getExperience = () => client.get('/experience/');
export const getEducation = () => client.get('/education/');
export const getSkills = () => client.get('/skills/');

export default client;
