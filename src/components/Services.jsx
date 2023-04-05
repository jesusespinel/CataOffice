import React from 'react';

import '../style-sheets/Services.css';

import { FaHammer, FaBrush, FaWrench, FaTruckPickup, FaBroom, FaPlug } from 'react-icons/fa';
import '../assets/location.jpg';
import image from '../assets/location.jpg';

const Services= ()=> {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-image">
          <img src={image} alt="Services" />
        </div>
        <div className="services-content">
          <h2 className="section-heading">Our Services</h2>
          <div className="services-cards">
            <div className="service-card">
              <div className="service-icon">
                <FaHammer />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBrush />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaWrench />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaTruckPickup />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBroom />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaPlug />
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
