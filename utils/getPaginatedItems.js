import { PAGINATION_LIMIT } from "../appConfig";

export default function getPaginatedItems(items, currentPage) {
    const copyItems = items.slice();
    const startIdx = (currentPage - 1) * PAGINATION_LIMIT;
    let endIdx = currentPage * PAGINATION_LIMIT;

    if (endIdx > items.length) {
        endIdx = items.length;
    };

    return copyItems.slice(startIdx, endIdx);
};