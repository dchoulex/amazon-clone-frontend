import Image from "next/image";
import Box from "@mui/material/Box";

function CartPanelImage(props) {
    const { imagePath } = props;

    return (
        <Box className="flex justify-center md:mr-5 pb-5">
            <div>
                <Image 
                    src={imagePath}
                    alt="picture"
                    width={200}
                    height={200}
                />
            </div>
        </Box>
    )
};

export default CartPanelImage;