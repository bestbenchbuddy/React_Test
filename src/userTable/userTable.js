
import { useState, useEffect } from 'react';

const UserTable = () => {
        const [data, setData] = useState([])
        const [locations, setLocations] = useState([])
        const [locationHeaders, setLocationHeaders] = useState([])

        const fetchData = async () => {
            const result = await fetch('https://randomuser.me/api/?results=20')
            result = result.json()
            setData(result)
            setLocationHeaders(extractObjectKeys(result[0].location))
            setLocations(flattenLocations(result))

            return result
        }

        //Get location headers
        const extractObjectKeys = (obj, res = []) => {
            for (const key of Object.keys(obj)) {
                if (typeof obj[key] === 'object') {
                    extractObjectKeys(obj[key], res);
                } else {
                    res.push(key.charAt(0).toUpperCase() + key.slice(1));
                }
            }
            return res;
        }

        //Flatten each object
        const flattenObj = (obj, res = {}) => {
            for (const key of Object.keys(obj)) {
                if (typeof obj[key] === 'object') {
                    res = flattenObj(obj[key], res);
                } else {
                    res[key] = obj[key];
                }
            }
            return res;
        }

        const flattenLocations = (locations) => {
            let res = []
            locations.map(person => {
                res.push(flattenObj(person.location))
            })
            return res
        }

        useEffect(() => {
            fetchData();
        }, [])
        
        return(
            <table >  
                <thead>
                    <tr>
                        {locationHeaders.map((header, headerIdx) => {
                            return (
                                <th key={headerIdx}>{header}</th>
                            )
                        })} 
                    </tr>
                </thead>
                <tbody>
                    {locations.map((person) => {
                        console.log("person", person)
                        return (
                            <tr>
                                {Object.keys(person).map((keyName, i) => (
                                    <th key={i}>{person[keyName]}</th>
                                ))}
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        );
    
}

export default UserTable;