import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "./Gallery.css";
import CharCard from "../components/CharCard";

const Gallery = ({supabase}) => {
    const [partyMembers, setPartyMembers] = useState([]);

    useEffect(() => {
        const getPartyMembers = async () => { 
            const {data, error} = await supabase
                .from('PartyMembers')
                .select('*');

            if (error) {
                console.error(error);
            } else setPartyMembers(data);
        }

        getPartyMembers();
    }, [])

    return (
        <>
            <Navbar />
            <div className="pg-content gallery-pg">
                <h1 className="page-title">Gallery</h1>
                {partyMembers.length !== 0 ? <CharCard />: 
                    <>
                        <p>No Party Members right now. Please create some</p>
                        <Link 
                            to='/create'
                            className='btn text'>Add a party member →</Link>
                    </>}
            </div>
        </>
    );
}

export default Gallery;