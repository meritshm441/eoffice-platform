// src/app/citizen-portal/business-license-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/BusinessLicenseApplicationPage.module.css'; // Import the CSS module

const BusinessLicenseApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states - Applicant Information
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');

  // Form states - Business Information
  const [businessName, setBusinessName] = useState<string>('');
  const [businessType, setBusinessType] = useState<string>(''); // e.g., Sole Proprietorship, PLC
  const [businessActivity, setBusinessActivity] = useState<string>('');
  const [businessSector, setBusinessSector] = useState<string>(''); // e.g., Retail, Manufacturing
  const [proposedStartDate, setProposedStartDate] = useState<string>('');
  const [businessAddress, setBusinessAddress] = useState<string>('');
  const [capitalInvestment, setCapitalInvestment] = useState<number | ''>('');

  // Form states - Supporting Documents
  const [supportingDocuments, setSupportingDocuments] = useState<FileList | null>(null);

  // Form submission states
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSupportingDocuments(e.target.files);
    }
  };

  // Handle form submission
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSubmissionSuccess(false);
    setIsSubmitting(true);

    // Basic validation
    if (
      !applicantFullName || !applicantIdNumber ||
      !businessName || !businessType || !businessActivity || !businessSector ||
      !proposedStartDate || !businessAddress || capitalInvestment === ''
    ) {
      setFormError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // In a real application, you would send this data to your backend API
    const formData = new FormData();
    formData.append('applicantFullName', applicantFullName);
    formData.append('applicantIdNumber', applicantIdNumber);
    formData.append('applicantContact', applicantContact);
    formData.append('applicantEmail', applicantEmail);
    formData.append('businessName', businessName);
    formData.append('businessType', businessType);
    formData.append('businessActivity', businessActivity);
    formData.append('businessSector', businessSector);
    formData.append('proposedStartDate', proposedStartDate);
    formData.append('businessAddress', businessAddress);
    formData.append('capitalInvestment', String(capitalInvestment)); // Convert number to string for FormData

    if (supportingDocuments) {
      for (let i = 0; i < supportingDocuments.length; i++) {
        formData.append('supportingDocuments', supportingDocuments[i]);
      }
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

      // Simulate success or failure
      const success = Math.random() > 0.1; // 90% chance of success

      if (success) {
        setSubmissionSuccess(true);
        // Optionally, reset form fields after successful submission
        setApplicantFullName('');
        setApplicantIdNumber('');
        setApplicantContact('');
        setApplicantEmail('');
        setBusinessName('');
        setBusinessType('');
        setBusinessActivity('');
        setBusinessSector('');
        setProposedStartDate('');
        setBusinessAddress('');
        setCapitalInvestment('');
        setSupportingDocuments(null);

        // Redirect to a confirmation or applications page after a short delay
        setTimeout(() => {
          router.push('/citizen-portal/my-applications'); // Example redirect
        }, 3000);

      } else {
        setFormError('Application failed. Please check your details and try again.');
      }
    } catch (error: any) {
      setFormError('An unexpected error occurred during submission.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header (simplified for this page, assuming it's part of a larger layout) */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Business License Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Business License</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to apply for a new business license. All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

          {formError && <p className={styles.errorMessage}>{formError}</p>}
          {submissionSuccess && (
            <div className={styles.successMessage}>
              <p>Application submitted successfully! You will be redirected shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmitApplication} className={styles.applicationForm}>
            {/* Section: Applicant Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Applicant Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="applicantFullName">Full Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="applicantFullName"
                  value={applicantFullName}
                  onChange={(e) => setApplicantFullName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantIdNumber">National ID Number <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="applicantIdNumber"
                  value={applicantIdNumber}
                  onChange={(e) => setApplicantIdNumber(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantContact">Contact Number:</label>
                <input
                  type="tel"
                  id="applicantContact"
                  value={applicantContact}
                  onChange={(e) => setApplicantContact(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantEmail">Email Address:</label>
                <input
                  type="email"
                  id="applicantEmail"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className={styles.inputField}
                />
              </div>
            </fieldset>

            {/* Section: Business Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Business Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="businessName">Proposed Business Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="businessType">Business Type <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="businessType"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Private Limited Company (PLC)">Private Limited Company (PLC)</option>
                  <option value="Share Company">Share Company</option>
                  <option value="Cooperative">Cooperative</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="businessActivity">Main Business Activity/Description <span className={styles.requiredStar}>*</span>:</label>
                <textarea
                  id="businessActivity"
                  value={businessActivity}
                  onChange={(e) => setBusinessActivity(e.target.value)}
                  className={styles.textareaField}
                  rows={3}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="businessSector">Business Sector <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="businessSector"
                  value={businessSector}
                  onChange={(e) => setBusinessSector(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Sector</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Services">Services</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="IT/Tech">IT/Tech</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Construction">Construction</option>
                  <option value="Finance">Finance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="proposedStartDate">Proposed Start Date <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="date"
                  id="proposedStartDate"
                  value={proposedStartDate}
                  onChange={(e) => setProposedStartDate(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="businessAddress">Business Address (Street, City, Region) <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="businessAddress"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="capitalInvestment">Capital Investment (ETB) <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="number"
                  id="capitalInvestment"
                  value={capitalInvestment}
                  onChange={(e) => setCapitalInvestment(Number(e.target.value))}
                  className={styles.inputField}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., National ID, Business Plan, Lease Agreement):</label>
                <input
                  type="file"
                  id="supportingDocuments"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png" // Specify accepted file types
                />
                <p className={styles.fileHint}>Max file size: 10MB per file. Allowed types: PDF, DOCX, JPG, PNG.</p>
                {supportingDocuments && supportingDocuments.length > 0 && (
                  <div className={styles.uploadedFiles}>
                    <p>Selected files:</p>
                    <ul>
                      {Array.from(supportingDocuments).map((file, index) => (
                        <li key={index}>{file.name} ({ (file.size / 1024 / 1024).toFixed(2) } MB)</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </fieldset>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button type="button" onClick={() => router.push('/citizen-portal')} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Business License Application.
      </footer>
    </div>
  );
};

export default BusinessLicenseApplicationPage;