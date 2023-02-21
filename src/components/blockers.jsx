import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';


export default function Blockers({id}) {

    const [blocks, setBlocks] = useState([]);
    let navigate = useNavigate();
    let list = {};

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
          .get(`${API}/spark/blockers/${id}`)
          .then((res) => {
            console.table(res.data);
            setBlocks(res.data);
          })
          .catch((error) => {
            console.log(error);
            navigate("/404");
          });
      }, [id, navigate, API]);
      
      return(
      <>
        <h1 className="mt-4">Blockers</h1>
            {blocks.map(blocker => {
                return(
                    <Container className="mx-4"> 
                        <h3>{blocker.blocker_main}</h3>
                        <ul>
                            {blocker.blockerlist.split('/n').map(block => <li>{block}</li>)}
                        </ul>
                    </Container>
                )
            })}
      </>
      )

}