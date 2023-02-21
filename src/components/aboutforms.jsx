import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function AboutForms() {
        let navigate = useNavigate();
            

        const [name, setName] = useState('');
        const [gender, setGender] = useState('');
        const [about, setAbout] = useState('');
        const [profile, setProfile] = useState('');
        const [mood, setMood] = useState('😊');
        const [theme, setTheme] = useState('');
        const [hasTasks, setHasTasks] = useState(true);
        const [hasBlockers, setHasBlockers] = useState(true);

        const API = process.env.REACT_APP_API_URL;

        const handleSubmit = async (event) => {
            event.preventDefault();

            const newUser = {
                'name': name,
                'gender': gender,
                'about': about,
                'profile': profile,
                'mood': '😊',
                'theme': theme,
                'has_tasks': false,
                'has_blockers': false

            };

            console.log(newUser)

            const addUser = (newUser) => {
              axios
                .post(`${API}/spark`, newUser)
                .then(
                  () => {
                    navigate(`/`);
                  },
                  (error) => console.error(error)
                )
                .catch((c) => console.warn("catch", c));
            };
            addUser(newUser);
        };


        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Gender:
                    <input type="text" value={gender} onChange={(event) => setGender(event.target.value)} />
                </label>
                <label>
                    About you:
                    <input type="text" value={about} onChange={(event) => setAbout(event.target.value)} />
                </label>
                <label>
                    Your Profile Picture:
                    <input type="text" value={profile} onChange={(event) => setProfile(event.target.value)} />
                </label>
                <label>
                    Favorite Color:
                    <select value={theme} onChange={(event) => setTheme(event.target.value)}>
                        <option value="primary">Primary</option>
                        <option value="secondary">Light Gray</option>
                        <option value="warning">Red</option>
                    </select>
                </label>
                <button type="submit">Add User</button>
            </form>
        );
    }