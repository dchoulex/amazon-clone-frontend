import MainBottomNav from './main-bottom-nav/main-bottom-nav';
import SubBottomNav from './sub-bottom-nav/sub-bottom-nav';

function Footer() {
    return (
        <footer className="bg-amazon_blue-dark flex flex-1 justify-center items-center max-h-[150px]">
            {/* <MainBottomNav /> */}

            <SubBottomNav />
        </footer>
    )
};

export default Footer;