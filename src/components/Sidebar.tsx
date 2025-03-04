import { useState } from "react";
import { Filters, initFilters } from "../types/user";
import { nationalities } from "../data/nat-codes";
import { increment, decrement } from "../utils/customNumberInput";
import "./styles/Sidebar.css";

interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
}

export default function Sidebar({ filters, onFiltersChange }: SidebarProps) {
    const [inputUsers, setInputUsers] = useState<number>(filters.numberUsers);

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
                <label>
                    Gender
                </label>
                <select
                    name="gender"
                    value={filters.gender}
                    onChange={(e) => onFiltersChange({ ...filters, gender: e.target.value })}
                >
                    <option value="">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <label>
                    Country
                </label>
                <select
                    name="nat"
                    value={filters.nat}
                    onChange={(e) => onFiltersChange({ ...filters, nat: e.target.value })}
                >
                    <option value="">All</option>
                    {nationalities.map((nation) => (
                        <option key={nation.code} value={nation.code}>
                            {nation.country}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={() => handleClear()}>Reset</button>
            </article>
        </>
    )
}