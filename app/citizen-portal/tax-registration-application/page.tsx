// src/app/citizen-portal/tax-registration-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/TaxRegistrationApplicationPage.module.css'; // Import the CSS module

const TaxRegistrationApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states - Applicant Information
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantAddress, setApplicantAddress] = useState<string>('');

  // Form states - Taxpayer Information
  const [taxpayerType, setTaxpayerType] = useState<string>('Individual'); // Individual or Business
  const [businessName, setBusinessName] = useState<string>(''); // Conditional for Business
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState<string>(''); // Conditional for Business
  const [industrySector, setIndustrySector] = useState<string>('');
  const [estimatedAnnualRevenue, setEstimatedAnnualRevenue] = useState<number | ''>('');
  const [existingTin, setExistingTin] = useState<string>(''); // If already registered for something else

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
      !applicantFullName || !applicantIdNumber || !applicantAddress ||
      !taxpayerType || !industrySector || estimatedAnnualRevenue === ''
    ) {
      setFormError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (taxpayerType === 'Business') {
      if (!businessName || !businessRegistrationNumber) {
        setFormError('Business Name and Registration Number are required for Business Taxpayer Type.');
        setIsSubmitting(false);
        return;
      }
    }

    // In a real application, you would send this data to your backend API
    const formData = new FormData();
    formData.append('applicantFullName', applicantFullName);
    formData.append('applicantIdNumber', applicantIdNumber);
    formData.append('applicantContact', applicantContact);
    formData.append('applicantEmail', applicantEmail);
    formData.append('applicantAddress', applicantAddress);
    formData.append('taxpayerType', taxpayerType);
    if (taxpayerType === 'Business') {
      formData.append('businessName', businessName);
      formData.append('businessRegistrationNumber', businessRegistrationNumber);
    }
    formData.append('industrySector', industrySector);
    formData.append('estimatedAnnualRevenue', String(estimatedAnnualRevenue));
    formData.append('existingTin', existingTin);

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
        setApplicantFullName(''); setApplicantIdNumber(''); setApplicantContact('');
        setApplicantEmail(''); setApplicantAddress(''); setTaxpayerType('Individual');
        setBusinessName(''); setBusinessRegistrationNumber(''); setIndustrySector('');
        setEstimatedAnnualRevenue(''); setExistingTin(''); setSupportingDocuments(null);

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
        <h1 className={styles.headerTitle}>Tax Registration Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Tax Registration</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to register for a Tax Identification Number (TIN). All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

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
              <div className={styles.formGroup}>
                <label htmlFor="applicantAddress">Residential/Business Address <span className={styles.requiredStar}>*</span>:</label>
                <textarea
                  id="applicantAddress"
                  value={applicantAddress}
                  onChange={(e) => setApplicantAddress(e.target.value)}
                  className={styles.textareaField}
                  rows={2}
                  required
                />
              </div>
            </fieldset>

            {/* Section: Taxpayer Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Taxpayer Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="taxpayerType">Taxpayer Type <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="taxpayerType"
                  value={taxpayerType}
                  onChange={(e) => setTaxpayerType(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {taxpayerType === 'Business' && (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="businessName">Business Name <span className={styles.requiredStar}>*</span>:</label>
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
                    <label htmlFor="businessRegistrationNumber">Business Registration Number <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="text"
                      id="businessRegistrationNumber"
                      value={businessRegistrationNumber}
                      onChange={(e) => setBusinessRegistrationNumber(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                </>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="industrySector">Industry Sector <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="industrySector"
                  value={industrySector}
                  onChange={(e) => setIndustrySector(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Sector</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail & Wholesale">Retail & Wholesale</option>
                  <option value="Services">Services</option>
                  <option value="IT & Telecommunications">IT & Telecommunications</option>
                  <option value="Finance & Insurance">Finance & Insurance</option>
                  <option value="Construction">Construction</option>
                  <option value="Mining">Mining</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="estimatedAnnualRevenue">Estimated Annual Revenue (ETB) <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="number"
                  id="estimatedAnnualRevenue"
                  value={estimatedAnnualRevenue}
                  onChange={(e) => setEstimatedAnnualRevenue(Number(e.target.value))}
                  className={styles.inputField}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="existingTin">Existing TIN (if any, for updates or supplementary registrations):</label>
                <input
                  type="text"
                  id="existingTin"
                  value={existingTin}
                  onChange={(e) => setExistingTin(e.target.value)}
                  className={styles.inputField}
                  placeholder="Optional"
                />
              </div>
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., National ID, Business Registration, Lease Agreement):</label>
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
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Tax Registration Application.
      </footer>
    </div>
  );
};

export default TaxRegistrationApplicationPage;