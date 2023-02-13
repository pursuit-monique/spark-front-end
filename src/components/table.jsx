import axios from "axios";  
import {useEffect, useState} from "react";

import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'


const API = process.env.REACT_APP_API_URL;

export default function TableList () {
const [users, getUsers] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/spark/tables`)
          .then((response) => getUsers(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

    //   console.log(Object.keys(users[0]))

      return(
        <>
        <Table striped hover bordered responsive variant="dark">
            <thead>
                <tr>
                        {Object.keys(users[0]).map((key) => (
                            <th key={key}>{key}</th>
                     ))}
        </tr>
            </thead>
            {users.map(user => {
                return(
                    <>  <tr>
                            <td> 
                                {user.id}
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                <Image src={user.profile} className="thumbnail" roundedCircle />
                                {/* // <img src={user.profile} alt={user.name} /> */}
                            </td>
                        </tr>
                    </>
                    )
                }
                )
            }

        </Table>
        </>
      )
}