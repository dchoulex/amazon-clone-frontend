import numberWithCommas from "./numberWithCommas";
import { TAX } from "../appConfig";

export default function getOrderTotal(cartItems, shippingCost) {
    let displayedTotalAmount;

    const subTotal = cartItems.reduce((subTotal, cartItem) => subTotal + cartItem.amount * cartItem.product.price, 0);
    const points = cartItems.reduce((points, cartItem) => points + cartItem.amount * cartItem.product.point, 0);
    const totalAmount = cartItems.reduce((totalAmount, cartItem) => totalAmount + cartItem.amount, 0);
    const tax = subTotal * TAX;
    const grandTotal = subTotal + shippingCost + tax;

    if (totalAmount === 0) displayedTotalAmount = "0 item";
    if (totalAmount === 1) displayedTotalAmount = "1 item";
    if (totalAmount > 1) displayedTotalAmount = `${totalAmount} items`;

    return {
        totalAmount: displayedTotalAmount,
        subTotal: numberWithCommas(subTotal),
        points:  numberWithCommas(points),
        tax:  numberWithCommas(tax),
        shippingCost:  numberWithCommas(shippingCost),
        grandTotal:  numberWithCommas(grandTotal)
    }
};