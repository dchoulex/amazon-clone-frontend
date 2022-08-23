import Box from "@mui/material/Box";

import ReviewInfo from "../../components/review/review-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

const reviews = [
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. In hac habitasse platea dictumst. Suspendisse hendrerit quam elit, nec feugiat nulla egestas quis. Nullam vehicula, ligula eget varius congue, dolor diam varius arcu, vel efficitur neque magna sit amet ex. Etiam laoreet odio at erat scelerisque, tempor viverra lorem dapibus. Proin ultricies, nisi ut ullamcorper malesuada, felis nisl lobortis dui, nec finibus turpis enim eget sem. Etiam pharetra est eu leo gravida, quis consectetur libero porta. Integer pulvinar ipsum at vehicula accumsan. Quisque dolor orci, condimentum id accumsan at, laoreet in libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultrices nulla, non vestibulum magna euismod id. Mauris interdum augue odio, eu aliquet mi luctus sit amet. Quisque fringilla semper tortor sit amet finibus. In dapibus urna vitae sapien consequat tincidunt. In vitae gravida mi, vel viverra nibh."
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. In hac habitasse platea dictumst. Suspendisse hendrerit quam elit, nec feugiat nulla egestas quis. Nullam vehicula, ligula eget varius congue, dolor diam varius arcu, vel efficitur neque magna sit amet ex. Etiam laoreet odio at erat scelerisque, tempor viverra lorem dapibus. Proin ultricies, nisi ut ullamcorper malesuada, felis nisl lobortis dui, nec finibus turpis enim eget sem. Etiam pharetra est eu leo gravida, quis consectetur libero porta. Integer pulvinar ipsum at vehicula accumsan. Quisque dolor orci, condimentum id accumsan at, laoreet in libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultrices nulla, non vestibulum magna euismod id. Mauris interdum augue odio, eu aliquet mi luctus sit amet. Quisque fringilla semper tortor sit amet finibus. In dapibus urna vitae sapien consequat tincidunt. In vitae gravida mi, vel viverra nibh."
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
];

function ReviewPage() {
    const isLogin = true;
    const pageTitle = "Review";

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <ReviewInfo title={pageTitle} reviews={reviews} /> :
                <PleaseLoginCard 
                    page={"review"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default ReviewPage;