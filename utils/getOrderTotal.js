import numberWithCommas from "./numberWithCommas";
import { TAX } from "../appConfig";

export default function getOrderTotal(cartItems, pointUsed, shippingCost) {
    let displayedTotalAmount;

    const subTotal = cartItems.reduce((subTotal, cartItem) => subTotal + cartItem.amount * cartItem.product.price, 0);
    const points = cartItems.reduce((points, cartItem) => points + cartItem.amount * cartItem.product.point, 0);
    const totalAmount = cartItems.reduce((totalAmount, cartItem) => totalAmount + cartItem.amount, 0);
    const tax = (subTotal * TAX) % 1 === 0 ? Math.trunc(subTotal * TAX) : Math.trunc(subTotal * TAX) + 1;
    const grandTotal = subTotal + shippingCost + tax - pointUsed;

    if (totalAmount === 0) displayedTotalAmount = "0 item";
    if (totalAmount === 1) displayedTotalAmount = "1 item";
    if (totalAmount > 1) displayedTotalAmount = `${totalAmount} items`;

    return {
        totalAmount: displayedTotalAmount,
        subTotal: subTotal ? numberWithCommas(subTotal) : null,
        points: points ? numberWithCommas(points) : null,
        tax: tax ? numberWithCommas(tax) : null,
        shippingCost: shippingCost ? numberWithCommas(shippingCost) : null,
        grandTotal: grandTotal ? numberWithCommas(grandTotal) :null
    }
};