import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import slugify from "slugify";

import SearchIcon from '@mui/icons-material/Search';

import { productActions } from "../../../../store/product-slice";
import FormikSubmitButton from "../../../ui/forms/formik-submit-button";
import FormikSearchInput from "./formik-search-input";
import FormikSearchCategory from "./formik-search-category";

function SearchBar() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmitSearchForm = async(values) => {
        const { category, keyword } = values;
        
        const slugKeyword = keyword === "" ? "" : slugify(keyword, { lower: true });

        const data = {
            category,
            keyword: slugKeyword
        };

        const res = await axios.post(process.env.NEXT_PUBLIC_SEARCH_PRODUCTS_API, data);

        const products = res.data.data;

        dispatch(productActions.setProducts({ products }));

        router.push("/products");
    };

    return (
        <div className="flex flex-col justify-center flex-1 min-w-[400px]">
            <Formik
                initialValues={{ 
                    category: "", 
                    keyword: "" 
                }}
                onSubmit={handleSubmitSearchForm}
            >
                <Form>
                    <div className="mx-2 flex flex-1 h-[36px] items-center">
                        <div className="flex flex-1">
                            <FormikSearchCategory  name="category" />

                            <FormikSearchInput  name="keyword" />
                        </div>

                        <FormikSubmitButton 
                            className="bg-orange-300 rounded-l-none border-orange-300 border-2 border-solid" 
                            startIcon ={
                                <SearchIcon sx={{color: "black"}} />
                            } 
                        />
                    </div> 
                </Form>
            </Formik>
        </div>
    )
};

export default SearchBar;