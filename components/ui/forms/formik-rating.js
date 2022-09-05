import { useState } from "react";
import { useField, useFormikContext } from "formik";

import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { RATING_LABELS } from "../../../appConfig";

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${RATING_LABELS[value]}`;
};

function FormikRating(props) {
    const { name, value, ...otherProps } = props;
    const [ hover, setHover ] = useState(-1);

    const { setFieldValue } = useFormikContext();
    const [ field, meta ] = useField(name);

    const handleChangeRating = (_, newValue) => {
        setFieldValue(name, newValue)
    };

    const handleOnChangeActive = (_, newHover) => {
        setHover(newHover);
    };

    const configRating = {
        ...field,
        ...otherProps,        
        onChange: handleChangeRating,
        onChangeActive: handleOnChangeActive,
        emptyIcon: 
            <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />,
        precision: 0.5,
        getLabelText
    };

    if (meta && meta.touched && meta.error) {
        configRating.error = true;
        configRating.helperText = meta.error;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
            mb={2}
        >
            <Rating { ...configRating } />
    
            <Box sx={{ ml: 2 }}>   
                {RATING_LABELS[hover !== -1 ? hover : value]}
            </Box>
        </Box>
    )
};

export default FormikRating;