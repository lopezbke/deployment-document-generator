import React from 'react';
import PropTypes from 'prop-types';
import './Deploymentform.css';

const printToPdf = () => {
  window.print();
};

const Deploymentform = () => {
  return (
    <div className='deploymentForm is-hidden' id='deploymentForm'>
     <div className='headingDiv'>
      <h1 className='is-size-3'>Deployment Form</h1>
     </div>
      <div className='box'>
        <div className='gridTwo'>
          <div>
          <label>Commits: </label>
            <textarea className='textarea'></textarea>
          </div>
          <div>
          <label>Developers: </label>
            <textarea className='textarea'></textarea>
          </div>
        </div>
        <div>
          <label>Details/Short Description: </label>
          <textarea className='textarea'></textarea>
        </div>
        <div>
          <label>Files affected: </label>
          <textarea className='textarea'></textarea>
        </div>
        <div>
          <label>DataBase: </label>
          <textarea className='textarea'></textarea>
        </div>
        <div>
          <label>Enviroment: </label>
            <input className='input' type={'text'}></input>
          </div>
        <br></br>
        <div className='gridTwo'>
          <div>
          <label>Deployed By: </label>
            <input className='input' type={'text'}></input>
          </div>
          <div>
          <label>Deployment Time: </label>
            <input className='input' type={'datetime-local'}></input>
          </div>
        </div>
        <br></br>
        <div>
          <label>Comments/Additional Notes: </label>
          <textarea className='textarea'></textarea>
        </div>
        <div className='printBtnDiv no-print'>
          <button className='button is-primary' onClick={printToPdf}>Print PDF</button>
        </div>
      </div>
    </div>
  )
};

Deploymentform.propTypes = {};

Deploymentform.defaultProps = {};

export default Deploymentform;
