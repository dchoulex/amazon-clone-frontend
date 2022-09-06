export default function getSortedItems(products, sortBy) {
    let sortedItems = products;

    switch(sortBy) {
        case "priceAsc":
            sortedItems = sortedItems.sort((a, b) => a.price - b.price);
            break;

        case "priceDesc":
            sortedItems = sortedItems.sort((a, b) => b.price - a.price);
            break;

        case "bestSellers":
            sortedItems = sortedItems.sort((a, b) => b.totalSold - a.totalSold);
            break;

        case "bestReview":
            sortedItems = sortedItems.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
            break;

        default:
            break;
    };

    return sortedItems;
};