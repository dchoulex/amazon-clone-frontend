import Box from '@mui/material/Box';
import Image from "next/image";

function ActiveProductImage() {
    return (
        <Box className="flex justify-center pb-10">
            <div>
                <Image 
                    src="/images/amazon-logo.png"
                    alt="picture"
                    width={400}
                    height={300}
                />
            </div>
        </Box>
    )
};

export default ActiveProductImage;