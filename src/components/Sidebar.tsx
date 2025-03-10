import { useState } from "react";
import { Filters, initFilters, Paginator } from "../types/user";
import { nationalities } from "../data/nat-codes";
import { increment, decrement } from "../utils/customNumberInput";
import "./styles/Sidebar.css";
import { Filter } from "lucide-react";

interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
    pagination: Paginator;
}

export default function Sidebar({ filters, onFiltersChange, pagination }: SidebarProps) {
    const [inputUsers, setInputUsers] = useState<number>(filters.numberUsers);
    const [tempFilters, setTempFilters] = useState({ gender: filters.gender, nat: filters.nat, seed: filters.seed });
    const [isActiveSeed, setIsActiveSeed] = useState<boolean>(false);

    const useSeed = (infoSeed: string) => {
        !isActiveSeed
            ? (setTempFilters({ ...tempFilters, seed: infoSeed, gender: initFilters.gender }), setIsActiveSeed(true))
            : (setTempFilters({ ...tempFilters, seed: initFilters.seed }), setIsActiveSeed(false))
    }

    const handleSubmit = () => {
        onFiltersChange({ ...filters, numberUsers: inputUsers, gender: tempFilters.gender, nat: tempFilters.nat, seed: tempFilters.seed });
    };

    const handleClear = () => {
        setIsActiveSeed(false);
        setInputUsers(initFilters.numberUsers);
        setTempFilters({ gender: initFilters.gender, nat: initFilters.nat, seed: initFilters.seed });
        pagination.page = 1;
        handleSubmit();
    }
    return (
        <article id="sidebar-items">
            <ul id="sidebar-header">
                <li><Filter size={38} color={"black"} strokeWidth={1}/></li>
                <li><h1>Filters</h1></li>
            </ul>
            <div className="custom-number">
                <div>
                    <input onChange={(e) => setInputUsers(parseInt(e.target.value))}
                        type="number" id="custom-input" min="1" autoFocus
                        value={inputUsers}>
                    </input>
                </div>
                <div className="custom-number-buttons">
                    <button onClick={() => increment(setInputUsers)}>+</button>
                    <button onClick={() => decrement(setInputUsers)}>-</button>
                </div>
            </div>
            <select
                disabled={isActiveSeed}
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
            {isActiveSeed
                ? (<button type="button" onClick={() => useSeed(pagination.seed)}>Clear seed<p>{pagination.seed}</p></button>)
                : (<button type="button" onClick={() => useSeed(pagination.seed)}>Use seed<p></p></button>)}
            <button type="button" onClick={handleSubmit} >Submit</button>
            <button type="button" onClick={() => handleClear()}>Reset</button>
        </article>
    )
}