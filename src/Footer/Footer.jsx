import { padding } from "@mui/system";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./styles";

const classes = {
	margin:{
		padding:'30px',
		marginTop:'25px'
	},
	footer:{
		height:'50px',
		background:'#1c1b1b',
		display:'flex',
		padding:'10px',
		justifyContent:'center',
		alignItems:'center',
		color:'white'
	}
}

const Footer = () => {
	
return (
	<>
		<Box>
		<h1 style={{ color:"white",
					textAlign: "center",
					marginTop: "50px",
					borderBottom: "1px solid #d51739",
					paddingBottom: "20px"
					}}>
			Self Ordering Restuarant
		</h1>
	{/* <Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		</Row>
	</Container> */}

	<Container>
		<Row>
		<Column>
			
			<div style={{color:'white'}}>
				<p style={{textIndent:'40px'}}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
				</p>
				<p style={{textIndent:'40px'}}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
				</p>
				<p style={{textIndent:'40px'}}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, corporis. Consequatur id nesciunt hic ipsam impedit eos minus laudantium, recusandae, eius tempore dicta! Numquam enim ducimus assumenda voluptas in dolorum.
				</p>
			</div>
	
		</Column>
		</Row>
		<Row>
		<Column>
			
			<div style={{display:'flex'}}>
				<FooterLink href="#">
					<i style={classes.margin} className="fab fa-facebook-f"></i>
					</FooterLink>
					<FooterLink href="#">
					<i style={classes.margin} className="fab fa-instagram"></i>
					</FooterLink>
					<FooterLink href="#">
					<i style={classes.margin} className="fab fa-twitter"></i>
					</FooterLink>
					<FooterLink href="#">
					<i style={classes.margin} className="fab fa-youtube"></i>
				</FooterLink>
			</div>
	
		</Column>
		</Row>
	</Container>

	</Box>
	<div style={classes.footer}>
		<p>© 2022 Copyright: rguktn@cse_miniproject.com</p>
	</div>
	</>
);
};
export default Footer;