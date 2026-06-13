'use client'

import PolicyHero from '@/components/sections/policy/PolicyHero'
import PolicyContent from '@/components/sections/policy/PolicyContent'

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: (
        <div className="space-y-4">
          <p>
            By accessing and using GIH services, including our website, booking
            platform, and reservations, you agree to be bound by these Terms of Use. If you do not agree with any
            part of these terms, please do not use our services.
          </p>
          <p>
            GIH reserves the right to modify these terms at any time without prior notice. Your continued use of our
            services constitutes acceptance of any changes made.
          </p>
        </div>
      ),
    },
    {
      id: 'use-license',
      title: 'License of Use',
      content: (
        <div className="space-y-4">
          <p>
            Permission is granted to temporarily download one copy of the materials (information and software) on
            GIH's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
            a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p>
            GIH shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the services, including loss of data, revenue, or profits,
            even if GIH has been advised of the possibility of such damages.
          </p>
          <p>
            The total liability of GIH in any matter relating to this agreement shall not exceed the amount paid by
            you for the booking in question.
          </p>
          <p>
            GIH is not responsible for circumstances beyond our reasonable control, including natural disasters,
            political events, pandemics, or other force majeure events.
          </p>
        </div>
      ),
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer of Warranties',
      content: (
        <div className="space-y-4">
          <p>
            GIH's website and services are provided on an "AS IS" and "AS AVAILABLE" basis. GIH makes no warranties,
            expressed or implied, regarding:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The accuracy, completeness, or reliability of information on the website</li>
            <li>Uninterrupted or error-free service</li>
            <li>Fitness for a particular purpose</li>
            <li>Merchantability of services</li>
          </ul>
          <p className="pt-4">
            You use our services at your own risk and are solely responsible for any damage to your device or data.
          </p>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      content: (
        <div className="space-y-4">
          <p>
            All content on the GIH website, including text, graphics, logos, images, videos, and software, is the
            property of GIH or its content suppliers and is protected by international copyright and intellectual
            property laws.
          </p>
          <p>
            You may not reproduce, distribute, transmit, display, or perform any content without prior written
            permission from GIH. Unauthorized use of our intellectual property is strictly prohibited.
          </p>
        </div>
      ),
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: (
        <div className="space-y-4">
          <p>
            You agree to indemnify and hold harmless GIH, its officers, directors, employees, and agents from any
            claims, damages, liabilities, costs, and expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your violation of these Terms of Use</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your infringement of third-party rights</li>
            <li>Your misuse of our services</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'dispute',
      title: 'Dispute Resolution',
      content: (
        <div className="space-y-4">
          <p>
            Any disputes arising from these Terms of Use or your use of GIH services shall be governed by and
            construed in accordance with the laws of the Maldives, without regard to conflict of law principles.
          </p>
          <p>
            You agree that any legal action or proceeding shall be resolved through negotiation and good faith
            discussion. If resolution cannot be reached, disputes may be submitted to mediation or arbitration as
            agreed upon by both parties.
          </p>
        </div>
      ),
    },
    {
      id: 'severability',
      title: 'Severability',
      content: (
        <div className="space-y-4">
          <p>
            If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions
            shall continue in full force and effect. The invalid provision shall be modified to the minimum extent
            necessary to make it valid and enforceable.
          </p>
        </div>
      ),
    },
    {
  id: 'contact-us',
  title: 'Contact Information',
  content: (
    <div className="space-y-4">
      <p>
        For questions about these Terms of Use or to report violations, please contact us:
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
              href="mailto:legal@gih.mv"
              className="text-gold hover:underline"
            >
              legal@gih.mv
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
      <PolicyHero title="Terms of Use" lastUpdated="June 2025" />
      <PolicyContent sections={sections} />
    </>
  )
}
