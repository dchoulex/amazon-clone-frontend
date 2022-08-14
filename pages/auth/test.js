import { Box,Grid } from "@mui/material";
const mainProducts = [
    {
        title: "Best sellers",
        subheader: "Show best selling products.",
        action: "Click here for details"
    },
    {
        title: "Find the Perfect Gift",
        subheader: "Gift recommendations from Amazon.co.jp."
    },
    {
        title: "Amazon Prime",
        subheader: "Unlimited straming of thousands of shows and books. Free expedited shipping.",
        action: "Sign up"
    },
    {
        title: "Kindle",
        subheader: "30 days free trial. Get access to over 2 million books."
    },
    {
        title: "Amazon Basic",
        subheader: "Check out amazon basic products."
    },
    {
        title: "Amazon Music",
        subheader: "30 days free trial. Get access to over 90 million songs."
    }
];
export default function Test() {
    return (
        <Box className="relative z-10">  
            <Grid item container>
                {mainProducts.map(product => (
                    <Grid 
                        key={product}
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className="py-3 flex justify-center"
                    >
                        <div className="h-[350px] w-[400px]">

                        </div>
                        
                    </Grid>
                ))}        
                
                <Grid item>
                </Grid> 
            </Grid>
 
        </Box>
    )
}