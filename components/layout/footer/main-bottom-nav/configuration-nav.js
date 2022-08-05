// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from '@mui/material/FormControl';
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     selectButton: {
//         '&:before': {
//             borderColor: "red",
//         },
//         '&:after': {
//             borderColor: "red",
//         }
//     }
// });

// function ConfigurationNav() {
//     const classes = useStyles();

//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };

//     return (
//         <React.Fragment>
//             <Toolbar className="justify-center py-10">
//                 <Button>
//                     <Link href="/">
//                         <Image 
//                             src="/images/amazon-logo.png"
//                             alt="amazon-logo"
//                             width={100}
//                             height={30}
//                             objectFit="contain"
//                             layout="fixed"
//                         />
//                     </Link>
//                 </Button>
//                 <FormControl sx={{ minWidth: 120 }}              className={classes.selectButton}>
//                     <InputLabel 
//                         id="language"
//                         // className="text-zinc-200"
//                         className={classes.selectButton}
//                     >
//                         Language
//                     </InputLabel>
//                     <Select 
//                         id="language"
//                         labelId="language"
//                         // className="text-white bg-opacity-20"
//                         className={classes.selectButton}
//                         sx={{ opacity: "100"}}
//                         onChange={handleChange}
//                     >
//                         <MenuItem
//                             // className="text-white" 
//                             value={"english"}
//                             className={classes.selectButton}
//                         >
//                             English
//                         </MenuItem>
//                         <MenuItem   
//                             className="text-white" 
//                             value={"japanese"} 
//                             disabled
//                         >
//                             Japanese
//                         </MenuItem>
//                     </Select>
//                 </FormControl>

//             </Toolbar>
//         </React.Fragment>
//     )
// };

// export default ConfigurationNav;