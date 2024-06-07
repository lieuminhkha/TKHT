import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
            <div>
                <img src="/src/assets/Ethereum-logo.png" alt="Logo" style={{ width: '120px' }} />
            </div>
            <Menu mode="horizontal" style={{ borderBottom: 'none', color: "#555" }}>
                <Link
                    to="/"
                    className=" px-2 text-xl font-bold tracking-tight"
                >
                    TRANG CHỦ
                </Link>
                <Link
                    to="/movie-list/0"
                    className=" px-2 text-xl font-bold tracking-tight"
                >
                    PHIM
                </Link>
                <Link
                    to="/showtime-list"
                    className=" px-2 text-xl font-bold tracking-tight"
                >
                    MUA VÉ
                </Link>
                <Link
                    to="/booking/2"
                    className=" px-2 text-xl font-bold tracking-tight"
                >
                    ĐƠN MUA
                </Link>
            </Menu>
            <div>
                Xin chào
            </div>
        </Header>
    );
};

export default AppHeader;
