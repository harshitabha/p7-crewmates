import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "./Gallery.css";
import CharCard from "../components/CharCard";

const Gallery = ({supabase}) => {
    const [partyMembers, setPartyMembers] = useState([]);

    const getPartyMembers = async () => { 
        const {data, error} = await supabase
            .from('PartyMembers')
            .select('*');

        if (error) {
            console.error(error);
        } else setPartyMembers(data);
    }

    useEffect(() => {
        getPartyMembers();
    }, [])

    return (
        <>
            <Navbar />
            <div className="pg-content gallery-pg">
                <h1 className="page-title">Gallery</h1>
                <div className="cards-container">
                    {partyMembers.length !== 0 ? partyMembers.map((member) => {
                        return <CharCard 
                                    key={member.id} 
                                    char={member}
                                    db = {supabase}
                                    getPartyMembers={getPartyMembers} />
                    
                    }): 
                        <div className="no-cards">
                            <p>No Party Members right now. Please create some</p>
                            <Link 
                                to='/create'
                                className='btn text'>Add a party member →</Link>
                        </div>}
                </div>
            </div>
        </>
    );
}

export default Gallery;