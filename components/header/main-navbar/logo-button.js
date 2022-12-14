import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function LogoButton() {
    return (
        <Button className="mr-1 flex-none p-0">
            <Link href="/">
                <div className="ml-16px">
                    <Image 
                        src="/images/amazon-logo-transparent.png"
                        alt="amazon-logo"
                        width={100}
                        height={40}
                        objectFit="contain"
                        layout="fixed"
                    />
                </div>
            </Link>

            <Box className="flex-col text-left normal-case">
                <Typography className="text-zinc-400 text-sm pb-5">
                    .co.jp
                </Typography>
                
                {/* <Typography className="text-base">
                    Prime
                </Typography> */}
            </Box>
        </Button>
    )
};

export default LogoButton;