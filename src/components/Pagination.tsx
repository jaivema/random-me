import type { Paginator } from "../types/user";
import "./styles/Paginator.css";

interface PaginationProps {
    onChangePage: (page: number) => void;
    pagination: Paginator;
}
const Pagination = ({ pagination, onChangePage }: PaginationProps) => {
    const handlePrevius = () => { if (pagination.page > 1) onChangePage(pagination.page - 1) };
    const handleNext = () => { onChangePage(pagination.page + 1) };
    return (
        <>
        <article id="paginator-buttons">
            <span>
                Page {pagination.page}
            </span>
            <button onClick={handlePrevius} disabled={pagination.page <= 1}>Previus</button>
            <button onClick={handleNext}>Next</button>
        </article>
        </>
    )
}
export default Pagination;