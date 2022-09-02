import * as React from 'react';
import { useField, useFormikContext } from 'formik';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function FormikDate(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChangeDate = newValue => {
        setFieldValue(name, newValue)
    };

    const configText = {
        sx: {
            height: "40px"
        },
        error: false
    }

    if (meta && meta.touched && meta.error) {
        configText.error = true;
        configText.helperText = meta.error;
    };

    const configDate = {
        ...field,
        ...otherProps,
        onChange: handleChangeDate,
        renderInput: params => <TextField {...params} {...configText} />
    };
 
    return (
        <Box my={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <DesktopDatePicker {...configDate} />
                </Stack>
            </LocalizationProvider>
        </Box>
    );
};

export default FormikDate;