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
        const [hasTasks, setHasTasks] = useState(false);
        const [hasBlockers, setHasBlockers] = useState(false);

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
                'has_tasks': hasTasks,
                'has_blockers': hasBlockers

            };

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
                    <input type="text" style={{width: '15vw'}} value={gender} onChange={(event) => setGender(event.target.value)} />
                </label>
                <label>
                    About you:
                    <textarea value={about} style={{width: '45vw'}}  onChange={(event) => setAbout(event.target.value)} />
                </label>
                <label>
                    Your Profile Picture:
                    <input type="text" style={{width: '65vw'}}  value={profile} onChange={(event) => setProfile(event.target.value)} />
                </label>
                <label>
                    Favorite Color:
                    <select className="form-select" value={theme} onChange={(event) => setTheme(event.target.value)}>
                        <option value="primary">-----</option>
                        <option value="primary">Blue</option>
                        <option value="danger">Red</option>
                        <option value="secondary">Light Gray</option>
                        <option value="warning">Yellow</option>
                        <option value="success">Green</option>
                        <option value="info">Cyan</option>
                        <option value="light">White</option>
                        <option value="black">Black</option>
                    </select>
                </label>
                <div className="form-check">
                <label className="form-check-label">
                    Goals:
                    <input type="checkbox" className="form-check-input" value={hasTasks} onChange={(event) =>{ setHasTasks(!hasTasks);}}></input>
                </label>
                </div>
                <div className="form-check">
                <label className="form-check-label">
                    Blockers:
                    <input type="checkbox" className="form-check-input" value={hasBlockers} onChange={(event) =>{ setHasBlockers(!hasBlockers);}}></input>
                </label>
                </div>
                <button className="btn btn-dark" type="submit">Add User</button>
            </form>
        );
    }