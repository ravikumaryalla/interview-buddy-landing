import LegalLayout from '../components/LegalLayout';
import { config } from '../config';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-gray-700 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-violet-500 font-bold mt-0.5 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  );
}

function MailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="text-violet-600 hover:underline font-medium">{email}</a>
  );
}

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={config.policy.lastUpdated}>
      <div className="bg-violet-50 border border-violet-100 rounded-xl px-5 py-4 mb-10 text-sm text-violet-800">
        <strong>Summary:</strong> We collect only what's necessary to run {config.app.name}. We never sell your data. Everything is encrypted. You can delete your account and data at any time.
      </div>

      <Section title="1. Who We Are">
        <p>
          {config.app.name} ("we", "our", "us") is an AI-powered interview preparation and guidance platform operated at <strong>{config.app.url}</strong>. We are committed to protecting your personal data and respecting your privacy.
        </p>
        <p>
          For any privacy-related queries, contact us at: <MailLink email={config.contact.privacy} />
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We collect the following categories of data when you use {config.app.name}:</p>
        <ul className="space-y-2 mt-2">
          <Li><strong>Account Information:</strong> Name, email address, and password when you register.</Li>
          <Li><strong>Resume Data:</strong> Content you upload for resume-based question generation. This is processed to generate personalized practice questions and is never shared with third parties.</Li>
          <Li><strong>Session Data:</strong> Practice session recordings (text responses), AI feedback logs, and performance metrics stored to provide analytics and improvement tracking.</Li>
          <Li><strong>Usage Data:</strong> Pages visited, features used, device type, browser type, and IP address — collected automatically for product improvement and security.</Li>
          <Li><strong>Payment Information:</strong> Billing details are processed securely by our payment provider. We do not store credit card numbers or sensitive payment data on our servers.</Li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the data collected for the following purposes:</p>
        <ul className="space-y-2 mt-2">
          <Li>To provide, operate, and improve the {config.app.name} platform.</Li>
          <Li>To generate personalized interview questions and AI feedback.</Li>
          <Li>To process payments and manage your subscription.</Li>
          <Li>To send transactional emails (receipts, password resets, account alerts).</Li>
          <Li>To send product updates and newsletters — only if you opt in.</Li>
          <Li>To detect, prevent, and address fraud, abuse, or security issues.</Li>
          <Li>To comply with legal obligations.</Li>
        </ul>
        <p className="mt-3 font-medium text-gray-800">We do not use your data to train third-party AI models or sell it to advertisers.</p>
      </Section>

      <Section title="4. Data Storage and Security">
        <p>All data is stored on secure, encrypted servers. We implement the following security measures:</p>
        <ul className="space-y-2 mt-2">
          <Li>TLS/HTTPS encryption for all data in transit.</Li>
          <Li>AES-256 encryption for sensitive data at rest.</Li>
          <Li>Regular security audits and vulnerability assessments.</Li>
          <Li>Access controls ensuring only authorized personnel can access user data.</Li>
          <Li>Secure, hashed storage of passwords (bcrypt).</Li>
        </ul>
        <p className="mt-3">While we take every precaution, no system is 100% immune to breaches. In the event of a breach affecting your data, we will notify you within 72 hours in accordance with applicable law.</p>
      </Section>

      <Section title="5. Sharing Your Information">
        <p>We do not sell, trade, or rent your personal data. We may share data only in these limited circumstances:</p>
        <ul className="space-y-2 mt-2">
          <Li><strong>Service Providers:</strong> Trusted vendors who help us operate the platform (e.g., payment processors, email providers, cloud hosting). They are bound by strict data processing agreements.</Li>
          <Li><strong>Legal Requirements:</strong> When required by law, court order, or government authority.</Li>
          <Li><strong>Business Transfers:</strong> In the event of a merger or acquisition, you will be notified before your data is transferred.</Li>
        </ul>
      </Section>

      <Section title="6. Cookies and Tracking">
        <p>We use essential cookies to keep you logged in and ensure the platform works correctly. We may also use analytics cookies (e.g., to understand usage patterns) — these can be disabled in your browser settings.</p>
        <p className="mt-2">We do not use third-party advertising cookies or cross-site trackers.</p>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="space-y-2 mt-2">
          <Li><strong>Access:</strong> Request a copy of the data we hold about you.</Li>
          <Li><strong>Rectification:</strong> Correct any inaccurate or incomplete data.</Li>
          <Li><strong>Erasure:</strong> Request deletion of your account and all associated data.</Li>
          <Li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</Li>
          <Li><strong>Objection:</strong> Object to certain types of processing.</Li>
          <Li><strong>Withdraw Consent:</strong> Opt out of marketing communications at any time.</Li>
        </ul>
        <p className="mt-3">To exercise any of these rights, email us at <MailLink email={config.contact.privacy} />. We will respond within 30 days.</p>
      </Section>

      <Section title="8. Data Retention">
        <p>
          We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will erase your personal data within 30 days, except where retention is required by law (e.g., financial records may be kept for up to 7 years).
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          {config.app.name} is not directed at children under 13 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us immediately at <MailLink email={config.contact.privacy} />.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we make significant changes, we will notify you by email or through an in-app notification. Continued use of the platform after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>For any privacy-related questions, requests, or concerns:</p>
        <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm space-y-1">
          <p><strong>Privacy:</strong> <MailLink email={config.contact.privacy} /></p>
          <p><strong>Support:</strong> <MailLink email={config.contact.support} /></p>
          <p><strong>Website:</strong> {config.app.url}</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
