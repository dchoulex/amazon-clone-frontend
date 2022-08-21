import { PAGINATION_LIMIT } from "../appConfig";

export default function getPaginatedProducts(products, currentPage) {
    const copyProducts = products.slice();

    const startIdx = (currentPage - 1) * PAGINATION_LIMIT;
    let endIdx = currentPage * PAGINATION_LIMIT;

    if (endIdx > products.length) {
        endIdx = products.length;
    }

    return copyProducts.slice(startIdx, endIdx);
};