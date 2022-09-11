export default function getDisplayedNumOfResults(numOfResults) {
    let displayedNumOfResults;

    switch(true) {
        case numOfResults === 1:
            displayedNumOfResults = "1 item";
            break;
        case numOfResults > 1:
            displayedNumOfResults = `${numOfResults} items`
            break;
        default:
            displayedNumOfResults = "No item avaialable";
            break;
    };

    return displayedNumOfResults
};