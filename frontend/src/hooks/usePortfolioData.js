import { useState, useEffect } from 'react';
import * as api from '../api/client';

export const usePortfolioData = () => {
    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    profileRes, 
                    projectsRes, 
                    experienceRes, 
                    educationRes, 
                    skillsRes
                ] = await Promise.all([
                    api.getProfile(),
                    api.getProjects(),
                    api.getExperience(),
                    api.getEducation(),
                    api.getSkills()
                ]);

                // Django DRF results are usually in 'results' for list viewsets
                setProfile(profileRes.data.results?.[0] || null);
                setProjects(projectsRes.data.results || []);
                setExperience(experienceRes.data.results || []);
                setEducation(educationRes.data.results || []);
                setSkills(skillsRes.data.results || []);
                
                setLoading(false);
            } catch (err) {
                console.error("Error fetching portfolio data:", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { profile, projects, experience, education, skills, loading, error };
};
