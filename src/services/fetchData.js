import { useState } from "react";
import { useEffect } from "react";
const FetchTest = () => {
    const [annonces, setAnnonces] = useState([null]);
    const url = 'http://localhost:3000/data.json';
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnonces(data);
            });
    }, []);
    console.log(annonces);
    return annonces;

};
export default FetchTest;

