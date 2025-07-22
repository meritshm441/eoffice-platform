// src/app/citizen-portal/my-applications/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/MyApplicationsPage.module.css'; // Import the CSS module
import { CheckCircle2, AlertCircle, Download, FileText, Eye } from 'lucide-react'; // Import icons

// Define a type for an application
interface Application {
  id: string;
  serviceType: string;
  applicationId: string;
  submittedDate: string;
  status: 'Under Review' | 'Approved' | 'Additional Info Required' | 'Rejected';
  detailsLink?: string;
  downloadLink?: string;
}

const MyApplicationsPage: React.FC = () => {
  const router = useRouter();

  // Dummy application data
  const [applications, setApplications] = useState<Application[]>([
    {
      id: '1',
      serviceType: 'Birth Certificate',
      applicationId: 'BC-2025-001234',
      submittedDate: '2025-05-20',
      status: 'Under Review',
      detailsLink: '#',
    },
    {
      id: '2',
      serviceType: 'Business License',
      applicationId: 'BL-2025-005678',
      submittedDate: '2025-05-15',
      status: 'Approved',
      detailsLink: '#',
      downloadLink: '#',
    },
    {
      id: '3',
      serviceType: 'Passport Application',
      applicationId: 'PP-2025-009876',
      submittedDate: '2025-05-10',
      status: 'Additional Info Required',
      detailsLink: '#',
    },
    {
      id: '4',
      serviceType: 'Tax Registration',
      applicationId: 'TR-2025-001122',
      submittedDate: '2025-05-01',
      status: 'Approved',
      detailsLink: '#',
      downloadLink: '#',
    },
    {
      id: '5',
      serviceType: 'Land Certificate',
      applicationId: 'LC-2025-003344',
      submittedDate: '2025-04-25',
      status: 'Under Review',
      detailsLink: '#',
    },
    {
      id: '6',
      serviceType: 'Health Insurance',
      applicationId: 'HI-2025-005566',
      submittedDate: '2025-04-18',
      status: 'Rejected',
      detailsLink: '#',
    },
  ]);

  // Function to determine status badge style
  const getStatusBadgeClass = (status: Application['status']) => {
    switch (status) {
      case 'Approved':
        return styles.badgeApproved;
      case 'Under Review':
        return styles.badgeUnderReview;
      case 'Additional Info Required':
        return styles.badgeInfoRequired;
      case 'Rejected':
        return styles.badgeRejected;
      default:
        return styles.badgeDefault;
    }
  };

  // Function to determine status icon
  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle2 className={styles.iconApproved} />;
      case 'Under Review':
        return <FileText className={styles.iconUnderReview} />;
      case 'Additional Info Required':
        return <AlertCircle className={styles.iconInfoRequired} />;
      case 'Rejected':
        return <AlertCircle className={styles.iconRejected} />;
      default:
        return <FileText className={styles.iconDefault} />;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>My Applications</h1>
        <button onClick={() => router.push('/citizen-portal')} className={styles.backButton}>
          Back to Portal
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.applicationsSection}>
          <h2 className={styles.sectionTitle}>Your Submitted Applications</h2>
          <p className={styles.sectionDescription}>Here you can view the current status of all your government service applications.</p>

          {applications.length === 0 ? (
            <div className={styles.noApplications}>
              <p>You have no applications submitted yet.</p>
              <button onClick={() => router.push('/citizen-portal#services')} className={styles.applyNowButton}>
                Apply for a Service
              </button>
            </div>
          ) : (
            <div className={styles.applicationList}>
              {applications.map((app) => (
                <div key={app.id} className={styles.applicationCard}>
                  <div className={styles.applicationHeader}>
                    <div className={styles.applicationIconStatus}>
                      {getStatusIcon(app.status)}
                      <div className={styles.applicationTitles}>
                        <h3 className={styles.serviceType}>{app.serviceType}</h3>
                        <p className={styles.applicationId}>ID: {app.applicationId}</p>
                      </div>
                    </div>
                    <div className={styles.statusSection}>
                      <span className={`${styles.statusBadge} ${getStatusBadgeClass(app.status)}`}>
                        {app.status}
                      </span>
                      <p className={styles.submittedDate}>Submitted: {app.submittedDate}</p>
                    </div>
                  </div>
                  <div className={styles.applicationActions}>
                    {app.detailsLink && (
                      <button onClick={() => alert(`Viewing details for ${app.serviceType} (${app.applicationId})`)} className={styles.actionButton}>
                        <Eye className={styles.actionIcon} /> View Details
                      </button>
                    )}
                    {app.downloadLink && (
                      <button onClick={() => alert(`Downloading document for ${app.serviceType} (${app.applicationId})`)} className={`${styles.actionButton} ${styles.downloadButton}`}>
                        <Download className={styles.actionIcon} /> Download Document
                      </button>
                    )}
                    {app.status === 'Additional Info Required' && (
                      <button onClick={() => alert(`Navigating to provide additional info for ${app.applicationId}`)} className={`${styles.actionButton} ${styles.provideInfoButton}`}>
                        Provide Info
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Ethiopian Government Portal. My Applications.
      </footer>
    </div>
  );
};

export default MyApplicationsPage; 