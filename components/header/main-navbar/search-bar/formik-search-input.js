import { useField, useFormikContext } from "formik";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Autocomplete from '@mui/material/Autocomplete';

import { PRODUCTS_NAME } from "../../../../appConfig";

function FormikSearchInput(props) {
    const { name, ...otherProps } = props;
    const [ field, _ ] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChangeInput = (_, value) => {
      setFieldValue(name, value);
    };

    const configSearchInput = {
      ...field,
      ...otherProps,
      onInputChange: handleChangeInput,
      freeSolo: true,
      options: PRODUCTS_NAME,
      defaultValue: "",
      getOptionLabel: value => value,
      renderInput: props => {
        const { InputProps, InputLabelProps: inputlabelprops ,...otherProps } = props;
        
        return <InputBase {...InputProps} {...otherProps} />
      }
    };

    return (
        <Autocomplete 
          sx={{ 
            height: "36px",
            backgroundColor: "white",
            display: "flex",
            flex: "1 1 0%",
            px: 1
          }}
          {...configSearchInput}         
        />
    )
};

export default FormikSearchInput;