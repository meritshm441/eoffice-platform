// src/app/citizen-portal/birth-certificate-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/BirthCertificateApplicationPage.module.css'; // Import the CSS module

const BirthCertificateApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');

  const [childFullName, setChildFullName] = useState<string>('');
  const [childDateOfBirth, setChildDateOfBirth] = useState<string>('');
  const [childPlaceOfBirth, setChildPlaceOfBirth] = useState<string>('');
  const [childGender, setChildGender] = useState<string>('');

  const [fatherFullName, setFatherFullName] = useState<string>('');
  const [fatherNationality, setFatherNationality] = useState<string>('');
  const [motherFullName, setMotherFullName] = useState<string>('');
  const [motherNationality, setMotherNationality] = useState<string>('');

  const [supportingDocuments, setSupportingDocuments] = useState<FileList | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSupportingDocuments(e.target.files);
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSubmissionSuccess(false);
    setIsSubmitting(true);

    // Basic validation
    if (!applicantFullName || !applicantIdNumber || !childFullName || !childDateOfBirth || !childPlaceOfBirth || !childGender || !fatherFullName || !motherFullName) {
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
    formData.append('childFullName', childFullName);
    formData.append('childDateOfBirth', childDateOfBirth);
    formData.append('childPlaceOfBirth', childPlaceOfBirth);
    formData.append('childGender', childGender);
    formData.append('fatherFullName', fatherFullName);
    formData.append('fatherNationality', fatherNationality);
    formData.append('motherFullName', motherFullName);
    formData.append('motherNationality', motherNationality);

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
        setChildFullName('');
        setChildDateOfBirth('');
        setChildPlaceOfBirth('');
        setChildGender('');
        setFatherFullName('');
        setFatherNationality('');
        setMotherFullName('');
        setMotherNationality('');
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
        <h1 className={styles.headerTitle}>Birth Certificate Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Birth Certificate</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to apply for a birth certificate. All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

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

            {/* Section: Child Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Child Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="childFullName">Child's Full Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="childFullName"
                  value={childFullName}
                  onChange={(e) => setChildFullName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="childDateOfBirth">Date of Birth <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="date"
                  id="childDateOfBirth"
                  value={childDateOfBirth}
                  onChange={(e) => setChildDateOfBirth(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="childPlaceOfBirth">Place of Birth <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="childPlaceOfBirth"
                  value={childPlaceOfBirth}
                  onChange={(e) => setChildPlaceOfBirth(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="childGender">Gender <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="childGender"
                  value={childGender}
                  onChange={(e) => setChildGender(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </fieldset>

            {/* Section: Parent Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Parent Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="fatherFullName">Father's Full Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="fatherFullName"
                  value={fatherFullName}
                  onChange={(e) => setFatherFullName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="fatherNationality">Father's Nationality:</label>
                <input
                  type="text"
                  id="fatherNationality"
                  value={fatherNationality}
                  onChange={(e) => setFatherNationality(e.target.value)}
                  className={styles.inputField}
                  placeholder="e.g., Ethiopian"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="motherFullName">Mother's Full Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="motherFullName"
                  value={motherFullName}
                  onChange={(e) => setMotherFullName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="motherNationality">Mother's Nationality:</label>
                <input
                  type="text"
                  id="motherNationality"
                  value={motherNationality}
                  onChange={(e) => setMotherNationality(e.target.value)}
                  className={styles.inputField}
                  placeholder="e.g., Ethiopian"
                />
              </div>
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., Hospital Birth Record, Parents' IDs):</label>
                <input
                  type="file"
                  id="supportingDocuments"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                  multiple
                  accept=".pdf,.jpg,.png" // Specify accepted file types
                />
                <p className={styles.fileHint}>Max file size: 5MB per file. Allowed types: PDF, JPG, PNG.</p>
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
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Birth Certificate Application.
      </footer>
    </div>
  );
};

export default BirthCertificateApplicationPage;