import Box from "@mui/material/Box";

import AddressInfo from "../../components/address/address-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

const addresses = [
    {
        name: "Fever pitch",
        postCode: "123-456",
        city: "Sunlight",
        detail: "Tst matsugahana something something",
        country: "Japan",
        phoneNumber: "12304566",
        isDefault: true
    },
    {
        name: "Fever pitch",
        postCode: "123-456",
        city: "Sunlight",
        detail: "Tst matsugahana something something",
        country: "Japan",
        phoneNumber: "12304566",
        isDefault: false
    },
    {
        name: "Fever pitch",
        postCode: "123-456",
        city: "Sunlight",
        detail: "Tst matsugahana something something",
        country: "Japan",
        phoneNumber: "12304566",
        isDefault: false
    },
    {
        name: "Fever pitch",
        postCode: "123-456",
        city: "Sunlight",
        detail: "Tst matsugahana something something",
        country: "Japan",
        phoneNumber: "12304566",
        isDefault: false
    },
    {
        name: "Fever pitch",
        postCode: "123-456",
        city: "Sunlight",
        detail: "Tst matsugahana something something",
        country: "Japan",
        phoneNumber: "12304566",
        isDefault: false
    },
];

function AddressPage() {
    const isLogin = true;
    const pageTitle = "Address";

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <AddressInfo 
                    title={pageTitle}                     
                    addresses={addresses}
                /> :
                <PleaseLoginCard 
                    page={"addresses"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default AddressPage;