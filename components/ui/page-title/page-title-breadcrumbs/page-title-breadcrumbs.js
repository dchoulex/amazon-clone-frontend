import { Fragment } from "react";
import { useRouter } from "next/router";

import AddressBreadcrumbs from "./address-breadcrumbs";
import OrderHistoryBreadcrumbs from "./order-history-breadcrumbs";

function PageTitleBreadcrumbs(props) {
    const { title } = props;
    const router = useRouter();
    const isOrderPage = title === "Your Orders";
    const isOrderDetailPage = title === "Order Details";

    return (
        <Fragment>
            {router.pathname.includes("/order-history") &&
                <OrderHistoryBreadcrumbs 
                    isOrderPage={isOrderPage}
                    isOrderDetailPage={isOrderDetailPage}
                />
            }
    
            {router.pathname.includes("/address") &&
                <AddressBreadcrumbs />
            }
        </Fragment>
    )
};

export default PageTitleBreadcrumbs;