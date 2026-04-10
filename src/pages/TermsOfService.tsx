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
          {app.name} is an <strong>AI-powered live interview assistance Windows desktop application</strong> that:
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Captures your screen in real-time during interviews using a proprietary stealth capture engine.</Li>
          <Li>Delivers AI-generated answers to interview questions as they appear on your screen.</Li>
          <Li>Operates in stealth mode to avoid detection by interview platforms and proctoring software.</Li>
          <Li>Requires credits to use, purchased via the website. Credits are consumed per minute of active AI assistance.</Li>
          <Li>Is available exclusively as a Windows desktop application ({app.platform}).</Li>
        </ul>
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
        <p>You agree to use {app.name} responsibly. You must NOT:</p>
        <ul className="space-y-2 mt-2">
          <Li>Reverse engineer, decompile, or attempt to extract the source code of the application or platform.</Li>
          <Li>Use automated bots, scrapers, or scripts to access the Service or circumvent credit usage.</Li>
          <Li>Share your account credentials or resell access to the platform.</Li>
          <Li>Upload content that is illegal, harmful, defamatory, or violates any third-party rights.</Li>
          <Li>Circumvent any security measures, rate limits, or access controls.</Li>
          <Li>Use the Service to harvest data about other users.</Li>
        </ul>
        <p className="mt-3">
          Violation of this Acceptable Use Policy may result in immediate termination of your account without refund.
        </p>
      </Section>

      <Section title="6. Usage Responsibility">
        <p>
          Users are responsible for ensuring their use of {app.name} complies with the terms and conditions of any interview platform or employer they interact with. {app.name} makes no representations about the permissibility of its use in any specific interview context.
        </p>
        <p className="mt-2">
          By using {app.name}, you accept full responsibility for how you use the application and its outputs.
        </p>
      </Section>

      <Section title="7. Credits and Billing">
        <p>
          {app.name} uses a credit-based billing model. Credits are purchased in packs and consumed per minute of live AI assistance:
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Starter Pack: {pricing.starterCredits} credits for ₹{pricing.starterPrice}</Li>
          <Li>Pro Pack: {pricing.proCredits} credits for ₹{pricing.proPrice}</Li>
          <Li>Elite Pack: {pricing.eliteCredits} credits for ₹{pricing.elitePrice}</Li>
        </ul>
        <ul className="space-y-2 mt-3">
          <Li>Credits never expire and are non-transferable between accounts.</Li>
          <Li>There are no subscriptions or auto-renewals. You only pay when you purchase a pack.</Li>
          <Li>All payments are processed securely through our payment provider (Cashfree).</Li>
          <Li>Taxes may apply depending on your location.</Li>
        </ul>
        <p className="mt-3">See our <a href="/refund-policy" className="text-violet-600 hover:underline font-medium">Refund Policy</a> for refund terms.</p>
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
