import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer style={{ backgroundColor: '#eeebdd', color: 'black', padding: '20px 50px' }}>
            <Row justify="space-between">
                <Col>
                    <p style={{ marginBottom: 0 }} className='font-semibold'>Chính sách khách hàng thường xuyên | Chính sách bảo mật thông tin | Điều khoản sử dụng</p>
                </Col>
                <Col>
                    <p style={{ marginBottom: 0, textAlign: 'right' }} className='font-semibold'>CÔNG TY TNHH LOTTE CINEMA VIỆT NAM</p>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: '10px' }}>
                <Col>
                    <FacebookOutlined style={{ fontSize: '20px', color: 'black', marginRight: '15px' }} />
                    <InstagramOutlined style={{ fontSize: '20px', color: 'black', marginRight: '15px' }} />
                    <TwitterOutlined style={{ fontSize: '20px', color: 'black' }} />
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: '10px' }}>
                <Col>
                    <p style={{ marginBottom: 0 }} className='font-semibold'>COPYRIGHT © LOTTECINEMAVN.COM - ALL RIGHTS RESERVED.</p>
                </Col>
            </Row>
        </Footer>
    );
};

export default AppFooter;
