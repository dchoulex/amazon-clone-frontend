// Theme color 
export const AMAZON_BLUE_DARK = "#0F1111";
export const AMAZON_BLUE_LIGHT = "#232f3e";

export const PREFECTURES = ["Hokkaido", "Tohoku", "Kanto", "Chubu", "Kinki", "Chugoku", "Shikoku", "Kyushu"];

export const PAGINATION_LIMIT = 10;

const timezoneOffset = new Date().getTimezoneOffset();
export const CURRENT_TIME = Date.now() - timezoneOffset;

export const DELIVERY_STATUS = ["Ordered", "Shipped",  "Out for Delivery", "Delivered", "Canceled"];

export const PAYMENT_METHODS = ["Credit Card", "Convenience Store", "ATM", "Amazon Points"];

export const RATING_LABELS = {
    0: 'No review',
    0.5: 'Not good',
    1: 'Bad',
    1.5: 'Poor',
    2: 'Not bad',
    2.5: 'Ok',
    3: 'Good',
    3.5: 'Very good',
    4: 'Great',
    4.5: 'Excellent',
    5: 'Perfect'
};

export const SEARCH_CATEGORY = ["All Categories", "Clothing", "Bag", "Jewelry", "Computers", "Peripherals", "Office", "Electronics", "Camera", "Food", "Beverage", "Alcohol", "Sports", "Outdoors"];

export const SORT_BY = ["none", "priceAsc", "priceDesc", "bestSellers", "bestReview"];