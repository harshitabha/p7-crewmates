import "./CharCard.css"

const CharCard = ({ char, db, getPartyMembers }) => {
    const deleteCard = async () => {
        const {data, error} = await db.from('PartyMembers')
            .delete()
            .eq('id', char.id)
            .select('*');

        if (error) {
            console.error(error);
            return;
        }
        getPartyMembers();
    }

    return (
        <div className="char-card">
            <div className="card-content">
                <img src="https://cdn-icons-png.flaticon.com/512/6831/6831868.png" alt="d20 dice icon" className="char-img" />
                <p className="card-name text">{char.charName}</p>
                <p className="info text">{char.charRace}, {char.charClass}</p>
            </div>
            <button 
                className="del-card"
                onClick={deleteCard}>
                <img src="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/recyclebin-512.png" alt="trash can icon" className="trash-icon" />
            </button>
        </div>
    )
}

export default CharCard;