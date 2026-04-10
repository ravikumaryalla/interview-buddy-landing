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

function PolicyCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{title}</p>
        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function RefundPolicy() {
  const { app, contact, policy } = config;

  return (
    <LegalLayout title="Refund Policy" lastUpdated={policy.lastUpdated}>
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4 mb-10 text-sm text-emerald-800">
        <strong>Our commitment:</strong> We want you to be completely satisfied with {app.name}. If you're not happy within {policy.refundWindowDays} days of your first credit purchase, we'll refund you — no questions asked.
      </div>

      {/* Quick summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <PolicyCard icon="✅" title={`${policy.refundWindowDays}-Day Money-Back`} desc={`Full refund within ${policy.refundWindowDays} days of your first credit pack purchase.`} />
        <PolicyCard icon="♾️" title="Credits Never Expire" desc="All purchased credits are valid indefinitely. No subscription, no auto-renewal." />
        <PolicyCard icon="🔒" title="No Hidden Charges" desc="What you see on the pricing page is exactly what you pay. No surprises." />
      </div>

      <Section title="1. Overview">
        <p>
          This Refund Policy governs all credit pack purchases made on {app.name} ("we", "our", "us"). We believe in fairness and transparency. This policy is designed to be clear, simple, and customer-friendly.
        </p>
        <p>
          By purchasing a credit pack, you agree to the terms of this Refund Policy. There are no subscriptions or auto-renewals — you purchase credits as needed.
        </p>
      </Section>

      <Section title="2. Money-Back Guarantee">
        <p>
          We offer a <strong>{policy.refundWindowDays}-day money-back guarantee</strong> on your first credit pack purchase. If you are not satisfied with the Service for any reason within the first {policy.refundWindowDays} days of your initial purchase, you may request a full refund.
        </p>
        <p className="mt-2">To request a refund under this guarantee:</p>
        <ul className="space-y-2 mt-2">
          <Li>Email us at <MailLink email={contact.support} /> within {policy.refundWindowDays} days of your payment date.</Li>
          <Li>Include your registered email address and the reason for your refund request (optional but helpful).</Li>
          <Li>We will process your refund within {policy.refundProcessingDays} business days.</Li>
        </ul>
        <p className="mt-3 text-gray-500 text-xs">
          Note: The money-back guarantee applies to the <em>first</em> credit pack purchase only. Subsequent purchases are governed by the standard refund policy below.
        </p>
      </Section>

      <Section title="3. Standard Refund Eligibility">
        <p>Outside of the {policy.refundWindowDays}-day guarantee window, refunds may be considered in the following circumstances:</p>
        <ul className="space-y-2 mt-2">
          <Li><strong>Duplicate Payment:</strong> If you were charged twice for the same subscription period, we will refund the duplicate charge immediately.</Li>
          <Li><strong>Service Unavailability:</strong> If the platform experienced significant downtime (more than 72 consecutive hours) during your paid billing period, you may be eligible for a pro-rated refund for the affected period.</Li>
          <Li><strong>Technical Issues:</strong> If a confirmed technical bug prevented you from accessing core features for an extended period and we were unable to resolve it, we will review your case and may issue a partial or full refund.</Li>
          <Li><strong>Unauthorized Charge:</strong> If you were charged without authorization, contact us immediately and we will investigate and refund promptly.</Li>
        </ul>
      </Section>

      <Section title="4. Non-Refundable Situations">
        <p>Refunds will generally not be issued in the following situations:</p>
        <ul className="space-y-2 mt-2">
          <Li>Requests made after {policy.refundWindowDays} days of the purchase date.</Li>
          <Li>Change of mind after actively using credits beyond initial exploration.</Li>
          <Li>Credits that have already been consumed (used during active sessions).</Li>
          <Li>Account termination due to violation of our Terms of Service.</Li>
        </ul>
      </Section>

      <Section title="5. Credit Packs and Expiry">
        <p>
          Credits purchased on {app.name} never expire. There is no subscription and no auto-renewal. You retain your credits indefinitely and can use them across multiple interviews at any time.
        </p>
        <ul className="space-y-2 mt-2">
          <Li>Credits are tied to your account and are non-transferable.</Li>
          <Li>If you purchased the wrong pack by mistake, contact support within 24 hours for a potential exchange.</Li>
          <Li>Unused credits at the time of account deletion will be forfeited.</Li>
        </ul>
        <p className="mt-3">
          For assistance, email us at <MailLink email={contact.support} />.
        </p>
      </Section>

      <Section title="6. Refund Process and Timeline">
        <p>Once a refund is approved:</p>
        <ul className="space-y-2 mt-2">
          <Li>Refunds are processed to the original payment method used at checkout.</Li>
          <Li>Processing time: <strong>{policy.refundProcessingDays} business days</strong> after approval.</Li>
          <Li>Depending on your bank or payment provider, it may take an additional 3–5 business days to reflect in your account.</Li>
          <Li>You will receive an email confirmation once the refund is initiated.</Li>
        </ul>
      </Section>

      <Section title="7. Contact for Refund Requests">
        <p>To request a refund or if you have questions about billing:</p>
        <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm space-y-2">
          <p><strong>Email:</strong> <MailLink email={contact.support} /></p>
          <p><strong>Subject line:</strong> Refund Request – [Your registered email]</p>
          <p><strong>Include:</strong> Your name, email, payment date, and reason (optional)</p>
          <p><strong>Response time:</strong> We aim to respond within 1–2 business days.</p>
        </div>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We reserve the right to update this Refund Policy at any time. Changes will be communicated via email and posted on this page with an updated effective date. For subscriptions already active at the time of a policy change, the previous policy terms will apply for that billing cycle.
        </p>
      </Section>
    </LegalLayout>
  );
}
