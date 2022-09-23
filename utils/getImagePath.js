export default function getImagePath(email) {
    let imagePath;

    switch(email) {
        case "dummy-user-1@gmail.com":
            imagePath = "/images/users/dummy-user-1.jpg";
            break;

        case "dummy-user-2@gmail.com":
            imagePath = "/images/users/dummy-user-2.jpg";
            break; 

        case "dummy-user-3@gmail.com":
            imagePath = "/images/users/dummy-user-3.jpg";
            break;
            
        case "amazon.clone.testuser@gmail.com":
            imagePath = "/images/users/test-user.jpg";
            break;

        default:
            break;
    }

    return imagePath
};