import Typography from "@mui/material/Typography";

function RevalidatingInfo() {
    const configRevalidatingInfo = {
        sx: {
            display: "flex",
            justify: "center",
            color: "rgb(239 68 68)"
        }
    }
    
    return (
        <Typography {...configRevalidatingInfo}>Revalidating...</Typography>
    )
};

export default RevalidatingInfo;