import { useState } from "react";
import { Filters, initFilters } from "../types/user";
import { nationalities } from "../data/nat-codes";
import { increment, decrement } from "../utils/customNumberInput";
import "./styles/Sidebar.css";

interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
    randomSeed: string;
    newSeed: () => void;
}

export default function Sidebar({ filters, onFiltersChange, randomSeed, newSeed }: SidebarProps) {
    const [inputUsers, setInputUsers] = useState<number>(filters.numberUsers);
    const [seedList, setSeedList] = useState<string[]>([]);

    const addSeed = (randomSeed: string) => {
        if (!seedList.includes(randomSeed)) setSeedList([...seedList, randomSeed]);
    }

    const handleSubmit = () => {
        onFiltersChange({ ...filters, numberUsers: inputUsers });
    };

    const handleClear =()=>{
        setInputUsers(initFilters.numberUsers)
        onFiltersChange({ ...filters, numberUsers: initFilters.numberUsers, gender: initFilters.gender, nat: initFilters.nat });
    }
    return (
        <>
            <article className="sidebarItems">
                <h2>Filters</h2>
                <label>Users per page</label>
                <div className="custom-number">
                    <div>
                        <input onChange={(e) => setInputUsers(parseInt(e.target.value))}
                            type="number" id="customInput" min="1" autoFocus
                            value={inputUsers}>
                        </input>
                    </div>
                    <div className="custom-number-buttons">
                        <button onClick={ () => increment(setInputUsers) }>+</button>
                        <button onClick={ () => decrement(setInputUsers) }>-</button>
                    </div>
                </div>
                <button type="button" onClick={handleSubmit} >Submit</button>
                <select
                    name="gender"
                    value={filters.gender}
                    onChange={(e) => onFiltersChange({ ...filters, gender: e.target.value })}
                >
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <select
                    name="nat"
                    value={filters.nat}
                    onChange={(e) => onFiltersChange({ ...filters, nat: e.target.value })}
                >
                    <option value="">Country</option>
                    {nationalities.map((nation) => (
                        <option key={nation.code} value={nation.code}>
                            {nation.country}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={() => handleClear()}>Reset</button>
                <label>Seeds</label>
                <button type="button" onClick={() => newSeed()}>Generate seed</button>
                <button type="button" onClick={() => addSeed(randomSeed)}>Add seed</button>
                <select
                    name="seed"
                    value={randomSeed}
                    onChange={(e) => onFiltersChange({ ...filters, seed: e.target.value })}
                >
                    <option value="">Select</option>
                    {seedList.map((seed, index) => (
                        <option key={index} value={seed}>{seed}</option>
                    ))}
                    </select>
                <ul>
                    {seedList.map((seed, index) => (
                        <li key={index}>{seed}</li>
                    ))}
                </ul>
            </article>
        </>
    )
}