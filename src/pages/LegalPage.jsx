import React from 'react';
import { Shield, AlertTriangle, FileText, Phone } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mb-5 text-center">
            <Shield size={48} className="text-success mb-3" />
            <h1 className="display-6 fw-bold">Legal Information & FAQ</h1>
            <p className="text-muted">
              Important information about THCA products and Florida law
            </p>
          </div>

          {/* Demo Notice */}
          <div className="alert alert-warning mb-5">
            <AlertTriangle className="me-2" size={20} />
            <strong>DEMO SITE NOTICE:</strong> This is a demonstration website only. 
            No actual products are sold here and no real transactions occur.
          </div>

          {/* Age Verification */}
          <div className="card mb-4 border-success">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <Shield className="me-2" size={20} />
                Age Verification Required
              </h5>
            </div>
            <div className="card-body">
              <p className="mb-3">
                <strong>You must be 21 years of age or older</strong> to purchase THCA products 
                in the state of Florida. Valid government-issued photo identification is required 
                for all purchases.
              </p>
              <ul className="mb-0">
                <li>Florida driver's license or ID card</li>
                <li>Valid U.S. passport</li>
                <li>Military ID card</li>
                <li>Other government-issued photo ID</li>
              </ul>
            </div>
          </div>

          {/* THCA Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">
                <FileText className="me-2" size={20} />
                What is THCA?
              </h5>
            </div>
            <div className="card-body">
              <p>
                <strong>THCA (Tetrahydrocannabinolic Acid)</strong> is a naturally occurring 
                compound found in raw cannabis plants. Unlike THC, THCA is non-psychoactive 
                in its raw form.
              </p>
              <p>
                THCA products are legal in Florida under current state and federal law, 
                including the 2018 Farm Bill, when derived from hemp containing less than 
                0.3% Delta-9 THC.
              </p>
              <p className="mb-0">
                <strong>Important:</strong> This information is for educational purposes only 
                and should not be considered medical or legal advice.
              </p>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Legal Compliance</h5>
            </div>
            <div className="card-body">
              <h6>Florida State Law</h6>
              <p>
                All products comply with Florida state regulations regarding hemp-derived 
                cannabinoids. Sales are restricted to individuals 21 years and older with 
                valid identification.
              </p>

              <h6>Federal Compliance</h6>
              <p>
                Products are compliant with the 2018 Farm Bill and contain less than 0.3% 
                Delta-9 THC on a dry weight basis.
              </p>

              <h6>Lab Testing</h6>
              <p className="mb-0">
                All products undergo third-party testing for:
              </p>
              <ul>
                <li>Cannabinoid potency</li>
                <li>Pesticides and herbicides</li>
                <li>Heavy metals</li>
                <li>Microbials</li>
                <li>Residual solvents</li>
              </ul>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="card mb-4 border-warning">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">
                <AlertTriangle className="me-2" size={20} />
                Medical Disclaimer
              </h5>
            </div>
            <div className="card-body">
              <p>
                <strong>These statements have not been evaluated by the FDA.</strong> 
                These products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p>
                THCA products have not been analyzed or approved by the FDA. There is limited 
                information on the side effects of using THCA products, and there may be 
                associated health risks.
              </p>
              <p className="mb-0">
                <strong>Consult your physician before use,</strong> especially if you are 
                pregnant, nursing, or have any medical conditions.
              </p>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Safe Usage Guidelines</h5>
            </div>
            <div className="card-body">
              <ul>
                <li><strong>Start Low, Go Slow:</strong> Begin with small amounts and wait to assess effects</li>
                <li><strong>Do Not Drive:</strong> Never operate vehicles or machinery after use</li>
                <li><strong>Keep Away From Children:</strong> Store products in a secure, child-proof location</li>
                <li><strong>Know Your Limits:</strong> Effects can vary based on individual tolerance</li>
                <li><strong>Stay Hydrated:</strong> Drink plenty of water before, during, and after use</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Frequently Asked Questions</h5>
            </div>
            <div className="card-body">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      Is THCA legal in Florida?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, THCA products derived from hemp containing less than 0.3% Delta-9 THC 
                      are legal in Florida under current state and federal law.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      Will THCA show up on a drug test?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      THCA may convert to THC when heated or over time, which could potentially 
                      show up on drug tests. Consult with your employer or testing facility 
                      if you have concerns.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      How should I store THCA products?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Store in a cool, dry place away from direct sunlight. Keep products in 
                      their original packaging and away from children and pets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <Phone className="me-2" size={20} />
                Need Help?
              </h5>
            </div>
            <div className="card-body">
              <p>
                For questions about our products, legal compliance, or general inquiries:
              </p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> legal@thcastore-fl.com</li>
                <li><strong>Phone:</strong> (555) 123-THCA</li>
                <li><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
              <p className="mb-0 text-muted small">
                <strong>Note:</strong> These are demo contact details for this demonstration website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;