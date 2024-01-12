import React from 'react';
import '../../../../scss/modules/_authFormPrivacySuccess.scss';

const PrivacyDetails = ({handlePrivacy, comTrayProduct, comOtherProducts, nextStep, prevStep}) => {
 
  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
      <div className='page-detail'>
      <div className="sectionText">
        <h1 className="sectionHeader">Privacy.</h1>
        <p className="sectionDescriptionPrivacy">We value your privacy.</p>
      </div>
            <div className='page-detail'>
              <p className="nextOne">1. Your Details</p> <p className="highlighted"> 2. Privacy </p> <p className="lastOne">3. Finish</p>  
            </div>
      </div>
      <div className='privacy-options'>
        <br/>
        <div>
          <input 
            type="checkbox" 
            value="comOtherProducts" 
            checked={comOtherProducts} 
            onChange={handlePrivacy('comOtherProducts')}
          />            
          <label 
            id='label-txt' 
            htmlFor="comOtherProducts">I accept the *terms* and *agreements* given by using this product.
          </label>
        </div> 
        <br/> 
      </div>   
      <br/>
      <div className="buttonGroup">
        <button className="stepBtn" id='btn-next' onClick={nextStep}>Create</button>
        <br/>
        <button className="stepBtn" id='btn-back' onClick={prevStep}>Back</button>
      </div>
    </div>    
  </div>            
)};

export default PrivacyDetails;