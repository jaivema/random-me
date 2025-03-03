import { useState } from "react";
import { Filters, initFilters } from "../types/user";
import { nationalities } from "../data/nat-codes";

interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
}

export default function Sidebar({ filters, onFiltersChange }: SidebarProps) {

    const [inputUsers, setInputUsers] = useState<number>(filters.numberUsers);

    const handleSubmit = () => {
        const numResults = Number(inputUsers);
        onFiltersChange({ ...filters, numberUsers: numResults });
    };
    return (
        <>
            <div className="sidebarItems">
                <h2>Filters</h2>
                <label>Number of users</label>
                <input type="number" min="1" onChange={(e) => setInputUsers(parseInt(e.target.value))}
                    value={inputUsers}
                    placeholder='number'
                />
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
                <button type="button" onClick={() => onFiltersChange(initFilters)}>Clear</button>
            </div>
        </>
    )
}