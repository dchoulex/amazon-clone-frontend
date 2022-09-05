// Theme color 
export const AMAZON_BLUE_DARK = "#0F1111";
export const AMAZON_BLUE_LIGHT = "#232f3e";

export const PREFECTURES = ["Hokkaido", "Tohoku", "Kanto", "Chubu", "Kinki", "Chugoku", "Shikoku", "Kyushu"];

export const PAGINATION_LIMIT = 10;

const timezoneOffset = new Date().getTimezoneOffset();
export const CURRENT_TIME = Date.now() - timezoneOffset;

export const DELIVERY_STATUS = ["Ordered", "Shipped",  "Out for Delivery", "Delivered", "Canceled"];

export const PAYMENT_METHODS = ["Credit Card", "Convenience Store", "ATM", "Amazon Points"];