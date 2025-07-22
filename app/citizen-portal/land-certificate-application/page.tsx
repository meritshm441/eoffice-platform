// src/app/citizen-portal/land-certificate-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/LandCertificateApplicationPage.module.css'; // Import the CSS module

const LandCertificateApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states - Applicant Information
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantAddress, setApplicantAddress] = useState<string>('');

  // Form states - Land Information
  const [applicationPurpose, setApplicationPurpose] = useState<string>(''); // New, Transfer, Subdivision, etc.
  const [landParcelId, setLandParcelId] = useState<string>('');
  const [landLocationRegion, setLandLocationRegion] = useState<string>('');
  const [landLocationZone, setLandLocationZone] = useState<string>('');
  const [landLocationWoreda, setLandLocationWoreda] = useState<string>('');
  const [landLocationKebele, setLandLocationKebele] = useState<string>('');
  const [landLocationSpecificArea, setLandLocationSpecificArea] = useState<string>('');
  const [landUseType, setLandUseType] = useState<string>('');
  const [landArea, setLandArea] = useState<number | ''>('');
  const [previousOwnerName, setPreviousOwnerName] = useState<string>(''); // Conditional for Transfer
  const [previousCertificateNumber, setPreviousCertificateNumber] = useState<string>(''); // Conditional for Transfer/Replacement

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
      !applicationPurpose || !landLocationRegion || !landLocationWoreda || !landUseType || landArea === ''
    ) {
      setFormError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (applicationPurpose === 'Transfer of Ownership' && !previousOwnerName) {
      setFormError('Previous Owner Name is required for Transfer of Ownership.');
      setIsSubmitting(false);
      return;
    }
    if ((applicationPurpose === 'Transfer of Ownership' || applicationPurpose === 'Replacement') && !previousCertificateNumber) {
      setFormError('Previous Certificate Number is required for Transfer or Replacement.');
      setIsSubmitting(false);
      return;
    }


    // In a real application, you would send this data to your backend API
    const formData = new FormData();
    formData.append('applicantFullName', applicantFullName);
    formData.append('applicantIdNumber', applicantIdNumber);
    formData.append('applicantContact', applicantContact);
    formData.append('applicantEmail', applicantEmail);
    formData.append('applicantAddress', applicantAddress);
    formData.append('applicationPurpose', applicationPurpose);
    formData.append('landParcelId', landParcelId);
    formData.append('landLocationRegion', landLocationRegion);
    formData.append('landLocationZone', landLocationZone);
    formData.append('landLocationWoreda', landLocationWoreda);
    formData.append('landLocationKebele', landLocationKebele);
    formData.append('landLocationSpecificArea', landLocationSpecificArea);
    formData.append('landUseType', landUseType);
    formData.append('landArea', String(landArea));
    if (applicationPurpose === 'Transfer of Ownership') {
      formData.append('previousOwnerName', previousOwnerName);
    }
    if (applicationPurpose === 'Transfer of Ownership' || applicationPurpose === 'Replacement') {
      formData.append('previousCertificateNumber', previousCertificateNumber);
    }

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
        setApplicantEmail(''); setApplicantAddress(''); setApplicationPurpose('');
        setLandParcelId(''); setLandLocationRegion(''); setLandLocationZone('');
        setLandLocationWoreda(''); setLandLocationKebele(''); setLandLocationSpecificArea('');
        setLandUseType(''); setLandArea(''); setPreviousOwnerName(''); setPreviousCertificateNumber('');
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
        <h1 className={styles.headerTitle}>Land Certificate Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Land Certificate</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to apply for a land certificate. All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

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
                <label htmlFor="applicantAddress">Current Residential Address <span className={styles.requiredStar}>*</span>:</label>
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

            {/* Section: Land Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Land Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="applicationPurpose">Purpose of Application <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="applicationPurpose"
                  value={applicationPurpose}
                  onChange={(e) => setApplicationPurpose(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Purpose</option>
                  <option value="New Certificate">New Certificate</option>
                  <option value="Transfer of Ownership">Transfer of Ownership</option>
                  <option value="Subdivision">Subdivision</option>
                  <option value="Consolidation">Consolidation</option>
                  <option value="Replacement">Replacement (Lost/Damaged)</option>
                  <option value="Correction">Correction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landParcelId">Land Parcel ID / Cadastral Number (if known):</label>
                <input
                  type="text"
                  id="landParcelId"
                  value={landParcelId}
                  onChange={(e) => setLandParcelId(e.target.value)}
                  className={styles.inputField}
                  placeholder="e.g., AA-01-00123"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landLocationRegion">Region <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="landLocationRegion"
                  value={landLocationRegion}
                  onChange={(e) => setLandLocationRegion(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landLocationZone">Zone (if applicable):</label>
                <input
                  type="text"
                  id="landLocationZone"
                  value={landLocationZone}
                  onChange={(e) => setLandLocationZone(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landLocationWoreda">Woreda <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="landLocationWoreda"
                  value={landLocationWoreda}
                  onChange={(e) => setLandLocationWoreda(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landLocationKebele">Kebele (if applicable):</label>
                <input
                  type="text"
                  id="landLocationKebele"
                  value={landLocationKebele}
                  onChange={(e) => setLandLocationKebele(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landLocationSpecificArea">Specific Area/Block/Plot Number:</label>
                <input
                  type="text"
                  id="landLocationSpecificArea"
                  value={landLocationSpecificArea}
                  onChange={(e) => setLandLocationSpecificArea(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landUseType">Land Use Type <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="landUseType"
                  value={landUseType}
                  onChange={(e) => setLandUseType(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Use Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Agricultural">Agricultural</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Mixed-use">Mixed-use</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="landArea">Land Area (in sq. meters) <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="number"
                  id="landArea"
                  value={landArea}
                  onChange={(e) => setLandArea(Number(e.target.value))}
                  className={styles.inputField}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              {(applicationPurpose === 'Transfer of Ownership' || applicationPurpose === 'Replacement') && (
                <>
                  <h4 className={styles.subSectionTitle}>Previous Land Details</h4>
                  {applicationPurpose === 'Transfer of Ownership' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="previousOwnerName">Previous Owner's Full Name <span className={styles.requiredStar}>*</span>:</label>
                      <input
                        type="text"
                        id="previousOwnerName"
                        value={previousOwnerName}
                        onChange={(e) => setPreviousOwnerName(e.target.value)}
                        className={styles.inputField}
                        required
                      />
                    </div>
                  )}
                  <div className={styles.formGroup}>
                    <label htmlFor="previousCertificateNumber">Previous Certificate Number <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="text"
                      id="previousCertificateNumber"
                      value={previousCertificateNumber}
                      onChange={(e) => setPreviousCertificateNumber(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                </>
              )}
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., National ID, Previous Title Deed, Sale Agreement, Survey Map):</label>
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
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Land Certificate Application.
      </footer>
    </div>
  );
};

export default LandCertificateApplicationPage;