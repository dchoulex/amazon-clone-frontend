import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

import PanelListItemImage from "./panel-list-item-image";
import PanelListItemDescription from "./panel-list-item-description/panel-list-item-description";

function TabPanelList(props) {
    const { items, currentTab } = props;

    return (
        <Box>
            {items.map((item, index) => (
                <Fragment key={item.productName}>
                    <Box className="flex py-7">
                        <Box 
                            className="w-[50px] flex flex-col justify-center items-center"
                        >
                            <Checkbox defaultChecked /> 
                        </Box>
             
                        <Box className="px-5 justify-center md:flex">
                            <PanelListItemImage imagePath="/images/amazon-logo.png" />

                            <PanelListItemDescription 
                                productName={item.productName}
                                stock={item.stock}
                                price={item.price}
                                point={item.point}
                                currentTab={currentTab}
                            /> 
                        </Box>
                    </Box>
    
                    {index === items.length - 1 ? 
                        null : 
                        <Divider sx={{ borderColor: "#bdbdbd", borderStyle: "dashed" }}/>
                    }
                </Fragment>
            ))}
        </Box>
    )
};

export default TabPanelList;