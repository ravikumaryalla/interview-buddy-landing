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
  return <a href={`mailto:${email}`} className="text-violet-600 hover:underline font-medium">{email}</a>;
}

export default function TermsOfService() {
  const { app, contact, pricing } = config;

  return (
    <LegalLayout title="Terms of Service" lastUpdated={config.policy.lastUpdated}>
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800">
        <strong>Please read carefully.</strong> By using {app.name}, you agree to these Terms of Service. This is a legally binding agreement between you and {app.name}.
      </div>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using the {app.name} platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
        </p>
        <p>
          These Terms apply to all users including free users, paid subscribers, and anyone who accesses or browses the platform.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          {app.name} is an <strong>AI-powered interview preparation and guidance platform</strong> that provides:
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Mock interview practice sessions in a private, offline environment.</Li>
          <Li>AI-generated feedback and improvement suggestions on practice responses.</Li>
          <Li>Resume-based question generation for targeted preparation.</Li>
          <Li>Performance analytics and progress tracking.</Li>
          <Li>Educational content covering technical and behavioral interview topics.</Li>
        </ul>
        <p className="mt-3 font-medium text-gray-800">
          {app.name} is a preparation tool designed exclusively for educational and self-improvement purposes. It is not intended to be used during actual interviews or to assist in any live hiring assessment.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>To use {app.name}, you must:</p>
        <ul className="space-y-2 mt-2">
          <Li>Be at least 13 years of age (or the age of digital consent in your jurisdiction).</Li>
          <Li>Have the legal capacity to enter into a binding agreement.</Li>
          <Li>Not be prohibited from using the Service under applicable law.</Li>
        </ul>
      </Section>

      <Section title="4. Account Registration">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Provide accurate and complete information during registration.</Li>
          <Li>Keep your password secure and not share it with others.</Li>
          <Li>Notify us immediately of any unauthorized use of your account at <MailLink email={contact.support} />.</Li>
          <Li>Accept responsibility for all activity conducted through your account.</Li>
        </ul>
      </Section>

      <Section title="5. Acceptable Use Policy">
        <p>You agree to use {app.name} only for its intended purpose — personal interview preparation. You must NOT:</p>
        <ul className="space-y-2 mt-2">
          <Li>Use the Service during actual job interviews, assessments, or hiring evaluations.</Li>
          <Li>Attempt to deceive, mislead, or gain unfair advantage over employers or hiring parties using this tool.</Li>
          <Li>Reverse engineer, decompile, or attempt to extract the source code of the platform.</Li>
          <Li>Use automated bots, scrapers, or scripts to access the Service.</Li>
          <Li>Share your account credentials or resell access to the platform.</Li>
          <Li>Upload content that is illegal, harmful, defamatory, or violates any third-party rights.</Li>
          <Li>Circumvent any security measures, rate limits, or access controls.</Li>
          <Li>Use the Service to harvest data about other users.</Li>
        </ul>
        <p className="mt-3">
          Violation of this Acceptable Use Policy may result in immediate termination of your account without refund.
        </p>
      </Section>

      <Section title="6. Ethical Use Commitment">
        <p>
          {app.name} is built on a commitment to ethical career development. Our platform helps you <strong>build genuine skills</strong> through practice — not to bypass, deceive, or manipulate any hiring process.
        </p>
        <p className="mt-2">
          All AI assistance provided by {app.name} occurs exclusively within private practice sessions. We explicitly do not support, enable, or condone any use of our platform to gain an unfair or dishonest advantage in any hiring context.
        </p>
        <p className="mt-2">
          By using {app.name}, you affirm that you will use it solely for personal skill development and preparation.
        </p>
      </Section>

      <Section title="7. Subscription and Billing">
        <p>
          {app.name} offers Free, Pro (₹{pricing.pro}/month), and Premium (₹{pricing.premium}/month) plans. Paid subscriptions are billed on a monthly or annual basis, as selected at checkout.
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Subscriptions auto-renew unless cancelled before the renewal date.</Li>
          <Li>You will be notified of any price changes at least 30 days in advance.</Li>
          <Li>All payments are processed securely through our trusted payment provider.</Li>
          <Li>Taxes may apply depending on your location.</Li>
        </ul>
        <p className="mt-3">See our <a href="/refund-policy" className="text-violet-600 hover:underline font-medium">Refund Policy</a> for cancellation and refund terms.</p>
      </Section>

      <Section title="8. Intellectual Property">
        <p>
          All content, features, and technology on {app.name} — including but not limited to the AI models, UI designs, question banks, and branding — are the exclusive intellectual property of {app.name} and are protected by applicable copyright, trademark, and other laws.
        </p>
        <p className="mt-2">
          You retain ownership of content you upload (e.g., your resume). By uploading, you grant us a limited, non-exclusive license to process your content solely for the purpose of providing the Service to you.
        </p>
      </Section>

      <Section title="9. Disclaimers and Limitation of Liability">
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that:
        </p>
        <ul className="space-y-2 mt-2">
          <Li>The Service will be uninterrupted, error-free, or fully secure.</Li>
          <Li>AI-generated feedback will be accurate, complete, or suitable for all situations.</Li>
          <Li>Use of the platform will result in job offers or interview success.</Li>
        </ul>
        <p className="mt-3">
          To the maximum extent permitted by law, {app.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
        </p>
      </Section>

      <Section title="10. Termination">
        <p>
          You may delete your account at any time from your account settings. We reserve the right to suspend or terminate your account if you violate these Terms, with or without prior notice.
        </p>
        <p className="mt-2">
          Upon termination, your right to use the Service will immediately cease. We may retain certain data as required by law. See our <a href="/privacy-policy" className="text-violet-600 hover:underline">Privacy Policy</a> for details on data retention.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
        </p>
      </Section>

      <Section title="12. Changes to Terms">
        <p>
          We may update these Terms from time to time. We will notify you of material changes via email or in-app notice at least 14 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance.
        </p>
      </Section>

      <Section title="13. Contact">
        <p>If you have questions about these Terms of Service:</p>
        <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm space-y-1">
          <p><strong>Legal:</strong> <MailLink email={contact.legal} /></p>
          <p><strong>Support:</strong> <MailLink email={contact.support} /></p>
          <p><strong>Website:</strong> {app.url}</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
