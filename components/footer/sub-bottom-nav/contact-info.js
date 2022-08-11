import { Fragment } from "react";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactInfo() {
    return (
        <Fragment>
            <Grid 
                container 
                direction="column"
            >
                <Grid 
                    item
                    className="text-center"
                >
                    <Typography 
                        className="text-blue-500 text-base" 
                    >
                        Created by
                        <Link 
                            href="https://www.linkedin.com/in/david-choulex/" 
                            passHref
                        >
                            <a
                                className="hover:underline text-white hover:text-zinc-200 ml-2"
                            >
                                David Choulex
                            </a>     
                        </Link>
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    className="pb-2 pt-1 text-center"
                >
                    <Link 
                        href="mailto:davidchoulex@gmail.com" 
                        passHref
                    >
                        <a 
                            className="hover:underline text-white hover:text-zinc-200 ml-2"
                        >
                            <EmailIcon className="w-6 h-6 mx-1" />
                        </a>     
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/david-choulex" 
                        passHref
                    >
                        <a 
                            className="hover:underline text-white hover:text-zinc-200 ml-2"
                        >
                            <LinkedInIcon className="w-6 h-6 mx-1" />
                        </a>     
                    </Link>
                    <Link 
                        href="https://github.com/dchoulex" 
                        passHref
                    >
                        <a 
                            className="hover:underline text-white hover:text-zinc-200 ml-2"
                        >
                            <GitHubIcon className="w-6 h-6 mx-1" />
                        </a>     
                    </Link>
                </Grid> 
            </Grid>
        </Fragment>
    )
}

export default ContactInfo;