import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter} from "mdbreact"
import { Link } from "react-router-dom";

const MobileHomePage = () => {
  return (
    
      
    <MDBCard className="m-1" style={{ width: "15rem"  }} cascade ecommerce wide>

      <MDBCardImage
        cascade
        top
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg"
        waves
      />
      
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">Category</MDBCardTitle>
        <MDBCardTitle>
          
            <strong>Mobiles</strong>
                  </MDBCardTitle>
        <MDBCardText>
                    Mobile Description
        </MDBCardText>
        <MDBCardFooter>
         
          <span className="float-right">   
            <Link to ="/Mobiledetails">
                
                <span><i class="fas fa-arrow-alt-circle-right"></i></span>            
                </Link>                     
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
   
  );
};

export default MobileHomePage;