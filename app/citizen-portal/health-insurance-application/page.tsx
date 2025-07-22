// src/app/citizen-portal/health-insurance-application/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/HealthInsuranceApplicationPage.module.css'; // Import the CSS module

// Interface for a dependent
interface Dependent {
  id: number;
  fullName: string;
  relationship: string;
  dateOfBirth: string;
  idNumber: string;
}

const HealthInsuranceApplicationPage: React.FC = () => {
  const router = useRouter();

  // Form states - Applicant Information
  const [applicantFullName, setApplicantFullName] = useState<string>('');
  const [applicantIdNumber, setApplicantIdNumber] = useState<string>('');
  const [applicantDateOfBirth, setApplicantDateOfBirth] = useState<string>('');
  const [applicantGender, setApplicantGender] = useState<string>('');
  const [applicantContact, setApplicantContact] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantAddress, setApplicantAddress] = useState<string>('');
  const [applicantMaritalStatus, setApplicantMaritalStatus] = useState<string>('');
  const [applicantOccupation, setApplicantOccupation] = useState<string>('');

  // Form states - Dependent Information
  const [dependents, setDependents] = useState<Dependent[]>([]);
  const [newDependentFullName, setNewDependentFullName] = useState<string>('');
  const [newDependentRelationship, setNewDependentRelationship] = useState<string>('');
  const [newDependentDateOfBirth, setNewDependentDateOfBirth] = useState<string>('');
  const [newDependentIdNumber, setNewDependentIdNumber] = useState<string>('');

  // Form states - Supporting Documents
  const [supportingDocuments, setSupportingDocuments] = useState<FileList | null>(null);

  // Form submission states
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Add dependent to the list
  const handleAddDependent = () => {
    if (newDependentFullName && newDependentRelationship && newDependentDateOfBirth && newDependentIdNumber) {
      setDependents(prev => [
        ...prev,
        {
          id: Date.now(), // Simple unique ID
          fullName: newDependentFullName,
          relationship: newDependentRelationship,
          dateOfBirth: newDependentDateOfBirth,
          idNumber: newDependentIdNumber,
        },
      ]);
      // Clear dependent form fields
      setNewDependentFullName('');
      setNewDependentRelationship('');
      setNewDependentDateOfBirth('');
      setNewDependentIdNumber('');
    } else {
      setFormError('Please fill all fields for the new dependent before adding.');
    }
  };

  // Remove dependent from the list
  const handleRemoveDependent = (id: number) => {
    setDependents(prev => prev.filter(dep => dep.id !== id));
  };

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

    // Basic validation for applicant
    if (
      !applicantFullName || !applicantIdNumber || !applicantDateOfBirth ||
      !applicantGender || !applicantContact || !applicantAddress || !applicantMaritalStatus
    ) {
      setFormError('Please fill in all required fields in Applicant Information.');
      setIsSubmitting(false);
      return;
    }

    // In a real application, you would send this data to your backend API
    const formData = new FormData();
    formData.append('applicantFullName', applicantFullName);
    formData.append('applicantIdNumber', applicantIdNumber);
    formData.append('applicantDateOfBirth', applicantDateOfBirth);
    formData.append('applicantGender', applicantGender);
    formData.append('applicantContact', applicantContact);
    formData.append('applicantEmail', applicantEmail);
    formData.append('applicantAddress', applicantAddress);
    formData.append('applicantMaritalStatus', applicantMaritalStatus);
    formData.append('applicantOccupation', applicantOccupation);
    formData.append('dependents', JSON.stringify(dependents)); // Stringify array of objects

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
        setApplicantGender(''); setApplicantContact(''); setApplicantEmail('');
        setApplicantAddress(''); setApplicantMaritalStatus(''); setApplicantOccupation('');
        setDependents([]); setNewDependentFullName(''); setNewDependentRelationship('');
        setNewDependentDateOfBirth(''); setNewDependentIdNumber('');
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
        <h1 className={styles.headerTitle}>Health Insurance Application</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Services
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Apply for Health Insurance</h2>
          <p className={styles.sectionDescription}>Please fill out the form below accurately to apply for national health insurance. All fields marked with an asterisk (<span className={styles.requiredStar}>*</span>) are required.</p>

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

            {/* Section: Dependent Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Dependent Information (Optional)</legend>
              {dependents.length > 0 && (
                <div className={styles.dependentList}>
                  <h4 className={styles.subSectionTitle}>Registered Dependents:</h4>
                  <ul>
                    {dependents.map(dep => (
                      <li key={dep.id} className={styles.dependentItem}>
                        <span>{dep.fullName} ({dep.relationship}, DOB: {dep.dateOfBirth}, ID: {dep.idNumber})</span>
                        <button type="button" onClick={() => handleRemoveDependent(dep.id)} className={styles.removeDependentButton}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <h4 className={styles.subSectionTitle}>Add New Dependent:</h4>
              <div className={styles.formGroup}>
                <label htmlFor="newDependentFullName">Dependent Full Name:</label>
                <input
                  type="text"
                  id="newDependentFullName"
                  value={newDependentFullName}
                  onChange={(e) => setNewDependentFullName(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newDependentRelationship">Relationship to Applicant:</label>
                <input
                  type="text"
                  id="newDependentRelationship"
                  value={newDependentRelationship}
                  onChange={(e) => setNewDependentRelationship(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newDependentDateOfBirth">Dependent Date of Birth:</label>
                <input
                  type="date"
                  id="newDependentDateOfBirth"
                  value={newDependentDateOfBirth}
                  onChange={(e) => setNewDependentDateOfBirth(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newDependentIdNumber">Dependent National ID Number:</label>
                <input
                  type="text"
                  id="newDependentIdNumber"
                  value={newDependentIdNumber}
                  onChange={(e) => setNewDependentIdNumber(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <button type="button" onClick={handleAddDependent} className={styles.addDependentButton}>
                Add Dependent
              </button>
            </fieldset>

            {/* Section: Supporting Documents */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.fieldsetLegend}>Supporting Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="supportingDocuments">Upload Supporting Documents (e.g., National ID, Birth Certificates of Dependents, Marriage Certificate):</label>
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
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. Health Insurance Application.
      </footer>
    </div>
  );
};

export default HealthInsuranceApplicationPage;