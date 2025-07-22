// src/app/citizen-portal/passport-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/PassportApplicationPage.module.css'; // Import the CSS module

const PassportApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states - Applicant Information
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantDateOfBirth, setApplicantDateOfBirth] = useState<string>('');
  const [applicantPlaceOfBirth, setApplicantPlaceOfBirth] = useState<string>('');
  const [applicantGender, setApplicantGender] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantAddress, setApplicantAddress] = useState<string>('');
  const [applicantMaritalStatus, setApplicantMaritalStatus] = useState<string>('');
  const [applicantOccupation, setApplicantOccupation] = useState<string>('');

  // Form states - Parent Information
  const [fatherFullName, setFatherFullName] = useState<string>('');
  const [fatherNationality, setFatherNationality] = useState<string>('');
  const [motherFullName, setMotherFullName] = useState<string>('');
  const [motherNationality, setMotherNationality] = useState<string>('');

  // Form states - Emergency Contact
  const [emergencyContactName, setEmergencyContactName] = useState<string>('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState<string>('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState<string>('');

  // Form states - Passport Type & Previous Passport Details
  const [passportType, setPassportType] = useState<string>('New Passport');
  const [previousPassportNumber, setPreviousPassportNumber] = useState<string>('');
  const [previousPassportIssueDate, setPreviousPassportIssueDate] = useState<string>('');
  const [previousPassportExpiryDate, setPreviousPassportExpiryDate] = useState<string>('');
  const [previousPassportIssuePlace, setPreviousPassportIssuePlace] = useState<string>('');
  const [reasonForReplacement, setReasonForReplacement] = useState<string>('');

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
      !applicantFullName || !applicantIdNumber || !applicantDateOfBirth || !applicantPlaceOfBirth ||
      !applicantGender || !applicantContact || !applicantAddress || !applicantMaritalStatus ||
      !fatherFullName || !motherFullName || !emergencyContactName || !emergencyContactRelationship ||
      !emergencyContactNumber
    ) {
      setFormError('Please fill in all required fields in Applicant, Parent, and Emergency Contact sections.');
      setIsSubmitting(false);
      return;
    }

    if (passportType !== 'New Passport') {
      if (!previousPassportNumber || !previousPassportIssueDate || !previousPassportExpiryDate || !previousPassportIssuePlace) {
        setFormError('Please provide all previous passport details for renewal/replacement.');
        setIsSubmitting(false);
        return;
      }
      if (passportType === 'Replacement' && !reasonForReplacement) {
        setFormError('Please provide a reason for passport replacement.');
        setIsSubmitting(false);
        return;
      }
    }

    // In a real application, you would send this data to your backend API
    const formData = new FormData();
    formData.append('applicantFullName', applicantFullName);
    formData.append('applicantIdNumber', applicantIdNumber);
    formData.append('applicantDateOfBirth', applicantDateOfBirth);
    formData.append('applicantPlaceOfBirth', applicantPlaceOfBirth);
    formData.append('applicantGender', applicantGender);
    formData.append('applicantContact', applicantContact);
    formData.append('applicantEmail', applicantEmail);
    formData.append('applicantAddress', applicantAddress);
    formData.append('applicantMaritalStatus', applicantMaritalStatus);
    formData.append('applicantOccupation', applicantOccupation);
    formData.append('fatherFullName', fatherFullName);
    formData.append('fatherNationality', fatherNationality);
    formData.append('motherFullName', motherFullName);
    formData.append('motherNationality', motherNationality);
    formData.append('emergencyContactName', emergencyContactName);
    formData.append('emergencyContactRelationship', emergencyContactRelationship);
    formData.append('emergencyContactNumber', emergencyContactNumber);
    formData.append('passportType', passportType);
    if (passportType !== 'New Passport') {
      formData.append('previousPassportNumber', previousPassportNumber);
      formData.append('previousPassportIssueDate', previousPassportIssueDate);
      formData.append('previousPassportExpiryDate', previousPassportExpiryDate);
      formData.append('previousPassportIssuePlace', previousPassportIssuePlace);
      if (passportType === 'Replacement') {
        formData.append('reasonForReplacement', reasonForReplacement);
      }
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
        setApplicantFullName(''); setApplicantIdNumber(''); setApplicantDateOfBirth('');
        setApplicantPlaceOfBirth(''); setApplicantGender(''); setApplicantContact('');
        setApplicantEmail(''); setApplicantAddress(''); setApplicantMaritalStatus('');
        setApplicantOccupation(''); setFatherFullName(''); setFatherNationality('');
        setMotherFullName(''); setMotherNationality(''); setEmergencyContactName('');
        setEmergencyContactRelationship(''); setEmergencyContactNumber('');
        setPassportType('New Passport'); setPreviousPassportNumber('');
        setPreviousPassportIssueDate(''); setPreviousPassportExpiryDate('');
        setPreviousPassportIssuePlace(''); setReasonForReplacement('');
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
        <h1 className={styles.headerTitle}>Passport Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Passport</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to apply for a passport. All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

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
                <label htmlFor="applicantFullName">Full Name (as per National ID) <span className={styles.requiredStar}>*</span>:</label>
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
                <label htmlFor="applicantDateOfBirth">Date of Birth <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="date"
                  id="applicantDateOfBirth"
                  value={applicantDateOfBirth}
                  onChange={(e) => setApplicantDateOfBirth(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantPlaceOfBirth">Place of Birth <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="applicantPlaceOfBirth"
                  value={applicantPlaceOfBirth}
                  onChange={(e) => setApplicantPlaceOfBirth(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantGender">Gender <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="applicantGender"
                  value={applicantGender}
                  onChange={(e) => setApplicantGender(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantContact">Contact Number <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="tel"
                  id="applicantContact"
                  value={applicantContact}
                  onChange={(e) => setApplicantContact(e.target.value)}
                  className={styles.inputField}
                  required
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
              <div className={styles.formGroup}>
                <label htmlFor="applicantMaritalStatus">Marital Status <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="applicantMaritalStatus"
                  value={applicantMaritalStatus}
                  onChange={(e) => setApplicantMaritalStatus(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="applicantOccupation">Occupation:</label>
                <input
                  type="text"
                  id="applicantOccupation"
                  value={applicantOccupation}
                  onChange={(e) => setApplicantOccupation(e.target.value)}
                  className={styles.inputField}
                />
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

            {/* Section: Emergency Contact */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Emergency Contact</legend>
              <div className={styles.formGroup}>
                <label htmlFor="emergencyContactName">Full Name <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="emergencyContactName"
                  value={emergencyContactName}
                  onChange={(e) => setEmergencyContactName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="emergencyContactRelationship">Relationship <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="text"
                  id="emergencyContactRelationship"
                  value={emergencyContactRelationship}
                  onChange={(e) => setEmergencyContactRelationship(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="emergencyContactNumber">Contact Number <span className={styles.requiredStar}>*</span>:</label>
                <input
                  type="tel"
                  id="emergencyContactNumber"
                  value={emergencyContactNumber}
                  onChange={(e) => setEmergencyContactNumber(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
            </fieldset>

            {/* Section: Passport Type & Previous Passport Details */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Passport Type</legend>
              <div className={styles.formGroup}>
                <label htmlFor="passportType">Application Type <span className={styles.requiredStar}>*</span>:</label>
                <select
                  id="passportType"
                  value={passportType}
                  onChange={(e) => setPassportType(e.target.value)}
                  className={styles.selectField}
                  required
                >
                  <option value="New Passport">New Passport</option>
                  <option value="Renewal">Renewal</option>
                  <option value="Replacement">Replacement (Lost/Damaged)</option>
                </select>
              </div>

              {(passportType === 'Renewal' || passportType === 'Replacement') && (
                <>
                  <h4 className={styles.subSectionTitle}>Previous Passport Details</h4>
                  <div className={styles.formGroup}>
                    <label htmlFor="previousPassportNumber">Previous Passport Number <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="text"
                      id="previousPassportNumber"
                      value={previousPassportNumber}
                      onChange={(e) => setPreviousPassportNumber(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="previousPassportIssueDate">Date of Issue <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="date"
                      id="previousPassportIssueDate"
                      value={previousPassportIssueDate}
                      onChange={(e) => setPreviousPassportIssueDate(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="previousPassportExpiryDate">Date of Expiry <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="date"
                      id="previousPassportExpiryDate"
                      value={previousPassportExpiryDate}
                      onChange={(e) => setPreviousPassportExpiryDate(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="previousPassportIssuePlace">Place of Issue <span className={styles.requiredStar}>*</span>:</label>
                    <input
                      type="text"
                      id="previousPassportIssuePlace"
                      value={previousPassportIssuePlace}
                      onChange={(e) => setPreviousPassportIssuePlace(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  {passportType === 'Replacement' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="reasonForReplacement">Reason for Replacement <span className={styles.requiredStar}>*</span>:</label>
                      <textarea
                        id="reasonForReplacement"
                        value={reasonForReplacement}
                        onChange={(e) => setReasonForReplacement(e.target.value)}
                        className={styles.textareaField}
                        rows={3}
                        required
                      />
                    </div>
                  )}
                </>
              )}
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., National ID, Old Passport, Birth Certificate, Photos):</label>
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
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Passport Application.
      </footer>
    </div>
  );
};

export default PassportApplicationPage;