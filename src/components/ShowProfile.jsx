import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { Layout, Breadcrumb, Card } from 'antd';
import {GithubOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const ShowProfile = props => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="brand" ><span style={{ padding: '10px', fontSize:30}}><GithubOutlined /></span><a href="/" style={{ color:'white'}}>Compare GitHub Profile</a></div>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><a href="/">Home /</a></Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="showData">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.image_url} alt="" />}
        >
        <h2><span style={{ color:"grey" }} >Username : </span> {props.username}</h2>
        <h3><span style={{ color:"grey" }} >Name : </span> {props.name}</h3>
        <h3><span style={{ color:"grey" }} >Repositories : </span> {props.repos}</h3>
        <h3><span style={{ color:"grey" }} >Following : </span> {props.following}</h3>
        <h3><span style={{ color:"grey" }} >Followers : </span> {props.followers}</h3>
        <h3><span style={{ color:"grey" }} >Url : </span></h3><a className="htmlurl" href={props.html_url}> {props.html_url}</a>
        </Card>
      </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    name: state.name,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    grabbedData: state.grabbedData,
    image_url: state.image_url,
    html_url: state.html_url
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowProfile);