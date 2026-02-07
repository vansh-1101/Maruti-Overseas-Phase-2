// Email service to handle form submissions
export interface FormSubmission {
    name?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    service?: string;
    country?: string;
    message?: string;
    formType: 'contact' | 'hero' | 'lead-popup';
}

export const submitFormToEmail = async (data: FormSubmission): Promise<boolean> => {
    try {
        // Create mailto link with form data
        const recipient = 'visnagar.moc@gmail.com';
        const subject = encodeURIComponent(`New ${data.formType} Form Submission - Maruti Overseas`);

        let bodyText = '';

        if (data.formType === 'contact') {
            bodyText = `
New Contact Form Submission

Name: ${data.name || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Service: ${data.service || 'N/A'}
Message: ${data.message || 'N/A'}

Submitted at: ${new Date().toLocaleString()}
      `.trim();
        } else if (data.formType === 'hero') {
            bodyText = `
New Lead Form Submission (Hero Section)

First Name: ${data.firstName || 'N/A'}
Last Name: ${data.lastName || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Preferred Country: ${data.country || 'N/A'}

Submitted at: ${new Date().toLocaleString()}
      `.trim();
        } else if (data.formType === 'lead-popup') {
            bodyText = `
New Lead Popup Submission

Email: ${data.email}

Submitted at: ${new Date().toLocaleString()}
      `.trim();
        }

        const body = encodeURIComponent(bodyText);
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Open default email client
        window.location.href = mailtoLink;

        return true;
    } catch (error) {
        console.error('Error submitting form:', error);
        return false;
    }
};
