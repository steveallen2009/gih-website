'use client'

import PolicyHero from '@/components/sections/policy/PolicyHero'
import PolicyContent from '@/components/sections/policy/PolicyContent'

export default function PrivacyPage() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p>
            GIH is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website and use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing and using GIH's services, you acknowledge that
            you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p>
            <strong>Information You Provide Directly:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Contact information (name, email, phone number, address)</li>
            <li>Payment information and billing details</li>
            <li>Guest preferences and special requests</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p className="pt-4">
            <strong>Information Collected Automatically:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring/exit pages</li>
            <li>Operating system</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2">

            <li>Provide customer support and respond to inquiries</li>
            <li>Send transactional emails and confirmations</li>
            <li>Improve our services and website functionality</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Analyze usage patterns and trends</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraudulent activities</li>
            <li>Enhance security and protect your rights</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is
            100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
          </p>
          <p>
            We use SSL encryption, secure payment gateways, and regular security audits to maintain the integrity of
            your data. Access to sensitive information is restricted to authorized personnel only.
          </p>
        </div>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      content: (
        <div className="space-y-4">
          <p>
            Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small
            data files stored on your device that help us remember your preferences and improve functionality.
          </p>
          <p>
            <strong>Types of cookies we use:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Essential Cookies:</strong> Required for site functionality</li>
            <li><strong>Performance Cookies:</strong> Help us understand how you use our site</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences</li>
            <li><strong>Marketing Cookies:</strong> Track advertising effectiveness</li>
          </ul>
          <p className="pt-4">
            You can manage cookie preferences through your browser settings. Disabling cookies may affect site
            functionality.
          </p>
        </div>
      ),
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      content: (
        <div className="space-y-4">
          <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share your
            information in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>With payment processors to complete transactions</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      content: (
        <div className="space-y-4">
          <p>
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Right to Access:</strong> Request access to your personal data</li>
            <li><strong>Right to Correction:</strong> Correct inaccurate information</li>
            <li><strong>Right to Deletion:</strong> Request deletion of your data</li>
            <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
          </ul>
          <p className="pt-4">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@gih.mv" className="text-gold hover:underline">
              privacy@gih.mv
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'third-party',
      title: 'Third-Party Links',
      content: (
        <div className="space-y-4">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            of these external sites. We encourage you to review their privacy policies before providing any personal
            information.
          </p>
        </div>
      ),
    },
    
    {
  id: 'contact',
  title: 'Contact Us',
  content: (
    <div className="space-y-4">
      <p>
        If you have questions about this Privacy Policy or our privacy practices,
        please contact us at:
      </p>

      <div
        className="mt-4 p-6 rounded-lg"
        style={{
          background: 'rgba(212,168,67,0.05)',
          border: '1px solid rgba(212,168,67,0.2)',
        }}
      >
        <div className="font-mono text-sm space-y-2">
          <div>GIH</div>
          <div>Malé, Maldives</div>

          <div>
            Email:{' '}
            <a
              href="mailto:privacy@gih.mv"
              className="text-gold hover:underline"
            >
              privacy@gih.mv
            </a>
          </div>

          <div>
            Phone:{' '}
            <a
              href="tel:+960300123400"
              className="text-gold hover:underline"
            >
              +960 300 1234
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
},
  ]

  return (
    <>
      <PolicyHero title="Privacy Policy" lastUpdated="June 2025" />
      <PolicyContent sections={sections} />
    </>
  )
}
