import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h5>Login With</h5>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
            <div className='mt-4'>
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='text-center'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;