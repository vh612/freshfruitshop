import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
    <div className="align-center">
      <h2 className="text-center">Store address</h2>
      <iframe
        title='gmap'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2129159000997!2d106.71924657587633!3d10.794998458849141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sT%C3%B2a%20nh%C3%A0%20The%20Landmark%2081!5e0!3m2!1svi!2s!4v1701067315626!5m2!1svi!2s"
        width="800" height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    );
  }
}

export default Gmap;