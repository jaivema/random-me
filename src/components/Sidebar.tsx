import { useState } from "react";
import { Filters, initFilters } from "../types/user";
import { nationalities } from "../data/nat-codes";
import { increment, decrement } from "../utils/customNumberInput";
import "./styles/Sidebar.css";

interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
    randomSeed: string;
    generateNewSeed: () => void;
}

export default function Sidebar({ filters, onFiltersChange, randomSeed, generateNewSeed }: SidebarProps) {
    const [inputUsers, setInputUsers] = useState<number>(filters.numberUsers);
    const [seedList, setSeedList] = useState<string[]>([]);
    const [tempFilters, setTempFilters] = useState({ gender: filters.gender, nat: filters.nat, seed: filters.seed });

    const useSeed = (randomSeed: string) => {
        setTempFilters({ ...tempFilters, seed: randomSeed })
        //if (!seedList.includes(randomSeed)) setSeedList([...seedList, randomSeed]);
    }

    const handleSubmit = () => {
        onFiltersChange({ ...filters, numberUsers: inputUsers, gender: tempFilters.gender, nat: tempFilters.nat });
    };

    const handleClear = () => {
        setInputUsers(initFilters.numberUsers)
        onFiltersChange({ ...filters, numberUsers: initFilters.numberUsers, gender: initFilters.gender, nat: initFilters.nat });
        setTempFilters({ gender: initFilters.gender, nat: initFilters.nat, seed: filters.seed });
    }
    return (
        <>
            <article id="sidebarItems">
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
                        <button onClick={() => increment(setInputUsers)}>+</button>
                        <button onClick={() => decrement(setInputUsers)}>-</button>
                    </div>
                </div>
                <select
                    name="gender"
                    value={tempFilters.gender}
                    onChange={(e) => setTempFilters({ ...tempFilters, gender: e.target.value })}
                >
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <select
                    name="nat"
                    value={tempFilters.nat}
                    onChange={(e) => setTempFilters({ ...tempFilters, nat: e.target.value })}
                >
                    <option value="">Country</option>
                    {nationalities.map((nation) => (
                        <option key={nation.code} value={nation.code}>
                            {nation.country}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={handleSubmit} >Submit</button>
                <button type="button" onClick={() => handleClear()}>Reset</button>
                <label>Seeds</label>
                <button type="button" onClick={() => generateNewSeed()}>Generate seed</button>
                <button type="button" onClick={() => useSeed(randomSeed)}>Use seed</button>
                <p>Seed used:</p> 
                <p>{randomSeed}</p>
            </article>
        </>
    )
}