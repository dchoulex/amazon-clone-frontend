import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function LogoButtonWhite() {
    return (
        <Button className="hover:bg-white ml-1 flex-none" disableRipple>
            <Link href="/">
                <div className="ml-16px">
                    <Image 
                        src="/images/amazon-logo.png"
                        alt="amazon-logo"
                        width={130}
                        height={70}
                        objectFit="contain"
                        layout="fixed"
                    />
                </div>
            </Link>
            <Box className="flex-col text-left normal-case">
                <Typography className="text-black text-sm">
                    .co.jp
                </Typography>
            </Box>
        </Button>
    )
};

export default LogoButtonWhite;