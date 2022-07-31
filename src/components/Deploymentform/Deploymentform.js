import React from 'react';
import PropTypes from 'prop-types';
import './Deploymentform.css';

const printToPdf = () => {
  window.print();
};

const Deploymentform = () => {
  return (
    <div className='deploymentForm'>
      <div className=''>
        <h1 className='is-size-2'>Deployment Form</h1>
        <div className='gridFour'>
          <div>
            <label>Commits: </label>
          </div>
          <div>
            <textarea className='textarea'></textarea>
          </div>
          <div>
            <label>Developers: </label>
          </div>
          <div>
            <textarea className='textarea'></textarea>
          </div>
        </div>
        <button className='button is-primary' onClick={printToPdf}>Print PDF</button>
      </div>
    </div>
  )
};

Deploymentform.propTypes = {};

Deploymentform.defaultProps = {};

export default Deploymentform;
