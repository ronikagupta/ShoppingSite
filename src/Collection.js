
import { Card } from 'antd';
import { Row, Col } from 'antd';
import React, { Component, useState } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import { Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from 'antd';
import './Css/button.css'



const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <h2>{number}</h2>
);

export default function Collection() {


    return (
        <div>

            {/* <ul>{listItems}</ul>, */}
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0c2hpcnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$15,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>

                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$10,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$12,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card
                        className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1612280413497-51cff8dccfd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9vZGllfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$14,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,
                </Col>

            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$14,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1625492922432-7da1b37dcfdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvb2RpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$13,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1628875986390-15280f9865e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvb2RpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$18,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card
                        className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvb2RpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="$19,00" description="Top Selling" />
                        <div className="site-button-ghost-wrapper mt-3">
                            <Button ghost >ADD TO CART</Button>
                            <Button ghost className="ms-5">Cancle</Button>
                        </div>
                    </Card>,

                </Col>

            </Row>
            <h1>Current Proucts in cart </h1>
        </div >
    )
}
