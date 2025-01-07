export default function Sidebar({ filters, setFilters }) {
    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
    }
    return (
        <>
            <h2>Filters</h2>
            <div>
                <label>
                    Gender
                </label>
                <select
                    name="gender"
                    value={filters.gender}
                    onChange={handleFilterChange}
                >
                    <option value="">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <label>
                    Nationality
                </label>
                <select
                    name="nat"
                    value={filters.nat}
                    onChange={handleFilterChange}
                >
                    <option value="">All</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="GB">Germany</option>
                </select>
            </div>
        </>
    )
}