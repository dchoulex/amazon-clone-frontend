import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Logo() {
    return (
        <React.Fragment>
            <Button className="flex-none p-0">
                <div className="ml-16px">
                    <Link href="/">
                        <Image 
                            src="/images/amazon-logo.png"
                            alt="amazon-logo"
                            width={110}
                            height={40}
                            objectFit="contain"
                            layout="fixed"
                        />
                    </Link>
                </div>
                <Box className="flex-col text-left normal-case">
                    <Typography className="text-zinc-400 text-sm">
                        .co.jp
                    </Typography>
                    <Typography className="text-base">
                        Prime
                    </Typography>
                </Box>
            </Button>
        </React.Fragment>
    )
};

export default Logo;