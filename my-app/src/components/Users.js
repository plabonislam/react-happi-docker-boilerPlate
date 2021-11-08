import React, { useState, useEffect } from "react";
import axios from "axios";
import baseurl from "../config"

export default function Users() {
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState(baseurl);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get(`${url}/people`).then(response => {
                console.log(response);
                setUsers(response.data);
            });

        };

        fetchData();

    }, []);


    return (<div>
        {
            users.map(item => {
                return (
                    <li key={item._id} className='list'>
                        <span className='repo-text'>{item.firstname} </span>
                        <span className='repo-description'>{item.lastname}</span>
                    </li>
                );
            })

        }
    </div>);
}
