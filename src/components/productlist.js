import React, { Component } from 'react'
import Product from './product'
import Title from './title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'
import MobileHomePage from './mobilecard'
import LaptopHomePage from './laptopcard'
import TvHomePage from './tvcard'
 
import {Row,Col,Container} from 'react-bootstrap'
export default class Productlist extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <div className = "py-5">
                    <div className = "container">
                        <Title 
                        title="Products"></Title>
                        
                        <Container>
                             <Row md={4} >
                                <Col xs={6}><MobileHomePage></MobileHomePage></Col>
                                <Col ><LaptopHomePage></LaptopHomePage></Col>
                                <Col><TvHomePage></TvHomePage></Col>
                            </Row>
                             {/* <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                 <Col>3 of 3</Col>
                                </Row> */}
                            </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
