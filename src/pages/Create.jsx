import Navbar from "../components/Navbar";
import RadioInput from "../components/RadioInput";
import { useState } from "react";

import "./Create.css";

const Create = ({supabase}) => {
    const [formOption, setFormOption] = useState({
        charName: "",
        charClass: "",
        charRace: ""
    });

    const handleFormChange = (e, attr) => {
        setFormOption((prevOpts) => ({ 
                    ...prevOpts, 
                    [attr]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addChar();
        // clear the form
        setFormOption({
            charName: "",
            charClass: "",
            charRace: ""
        });
    }

    const addChar = async () => {
        const {data, error} = await supabase.from('PartyMembers').insert([formOption]);

        if (error) {
            console.error(error);
        }
    }

    return (
        <div className="pg-content">
            <Navbar />
            <div className="create-pg">
                <h1>Create a New Party Member</h1>

                <div className="form-container">
                    <form>
                        <div className="input-container">
                            <label className="name">
                                Name:
                                <br />
                                <input 
                                    type="text" 
                                    name="name"
                                    onChange={(e) => handleFormChange(e, "charName")}
                                    value={formOption.charName}
                                    className="text-input"
                                    required />
                            </label>
                        </div>
                        <div className="row">
                            <RadioInput 
                                name={"Class:"}
                                checked={formOption.charClass}
                                handleOnChange={(e) => handleFormChange(e, 'charClass')}
                                vals={["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]}/>

                            <RadioInput 
                                name={"Race:"}
                                checked={formOption.charRace}
                                handleOnChange={(e) => handleFormChange(e, 'charRace')}
                                vals={["Human", "Variant Human", "Elf",  "Dwarf", "Halfling", "Tiefling", "Dragonborn", "Gnome", "Genasi", "Half-Orc"]}/>
                        </div>


                        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>Create Party Member</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;