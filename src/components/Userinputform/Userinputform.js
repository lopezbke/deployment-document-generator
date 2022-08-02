import React from 'react';
import PropTypes from 'prop-types';
import './Userinputform.css';


const GenerateForm = () => {
  let parameters = VerifyInputAndGetParameters();
  if (parameters != null) {
    console.log(parameters);
    document.getElementById('deploymentForm').classList.remove('is-hidden');
  }
};

const VerifyInputAndGetParameters = () => {
  const requireFieldsModal = document.getElementById('requiredFieldsModal');
  let parameters = {
    fromDate: '',
    toDate: '',
    branch: '',
    organization: '',
    project: '',
    repoId: ''
  };
  parameters.fromDate = document.getElementById('fromDate').value;
  parameters.toDate = document.getElementById('toDate').value;
  parameters.branch = document.getElementById('branch').value;
  parameters.organization = document.getElementById('organization').value;
  parameters.project = document.getElementById('project').value;
  parameters.repoId = document.getElementById('repoId').value;

  if (parameters.fromDate === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  if (parameters.toDate === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  if (parameters.branch === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  if (parameters.organization === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  if (parameters.project === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  if (parameters.repoId === '') {
    requireFieldsModal.classList.add('is-active');
    return null;
  }
  return parameters;
}

const modalClose = () => {
  document.getElementById('requiredFieldsModal').classList.remove("is-active");
};
const Userinputform = () => {
  return (
    <div className="Userinputform no-print">
      <div id="requiredFieldsModal" className='modal'>
        <div className="modal-background"></div>

        <div className="modal-content">
          <div className="box">
            <div className='modal-header-div'>
              <button className="delete has-background-danger-dark" aria-label="close" type='button' onClick={modalClose}></button>
            </div>
            <p>Please enter required fields.</p>
          </div>
        </div>
      </div>
      <div className='box'>
        <div>
          <h1 className='is-size-3'>Deployment Form Paremeters</h1>
        </div>
        {/* Paremeters */}
        <div>
          <label>Organization: </label>
          <input id='organization' className='input' type={'text'} inputparameter='true'></input>
        </div>
        <div>
          <label>Project: </label>
          <input id='project' className='input' type={'text'} inputparameter='true'></input>
        </div>
        <div>
          <label>Repo ID: </label>
          <input id='repoId' className='input' type={'text'} inputparameter='true'></input>
        </div>

        {/* Gettings commits by date from the default branch */}
        <div className='gridTwo'>
          <div>
            <label>From: </label>
            <input id='fromDate' className='input' type={'date'} inputparameter='true'></input>
          </div>
          <div>
            <label>To: </label>
            <input id='toDate' className='input' type={'date'} inputparameter='true'></input>
          </div>
        </div>
        {/* Gettings commits by branch */}
        <div>
          <label>Branch: </label>
          <input id='branch' className='input' type={'text'} inputparameter='true'></input>
        </div>
        {/* Generate Form */}
        <div className='generateFormBtnDiv'>
          <button className='button is-primary' onClick={GenerateForm}>Generate Form</button>
        </div>
      </div>
    </div>
  )
};

Userinputform.propTypes = {};

Userinputform.defaultProps = {};

export default Userinputform;
