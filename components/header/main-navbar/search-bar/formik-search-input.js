import { useField, useFormikContext } from "formik";

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
      className: "bg-white flex flex-1 px-3",
      onInputChange: handleChangeInput,
      sx: { height: "36px" },
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
      <Autocomplete {...configSearchInput} />
    )
};

export default FormikSearchInput;