import React from 'react';
import './PrivacyPolicy.css';

/**
 * Privacy Policy page for VIQANTAI TECH SERVICES PRIVATE LIMITED
 * Content sourced from Termly-generated privacy notice (Last updated Oct 1, 2025).
 *
 * Vite + React setup:
 *  - Save this file at: src/Pages/PrivacyPolicy.jsx
 *  - Save the companion stylesheet at: src/Pages/PrivacyPolicy.css
 *  - Add a route to it in App.jsx, e.g. with react-router-dom:
 *
 *      import PrivacyPolicy from "./Pages/PrivacyPolicy";
 *      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
 *
 * This version uses plain CSS classes (see PrivacyPolicy.css) rather than
 * Tailwind utility classes, so it works whether or not Tailwind is applied
 * to this route.
 */

const Section = ({ id, title, children }) => (
  <section id={id} className="pp-section">
    <h2 className="pp-heading">{title}</h2>
    <div className="pp-body">{children}</div>
  </section>
);

const TocLink = ({ href, children }) => (
  <a href={href} className="pp-link pp-toc-link">
    {children}
  </a>
);

export default function PrivacyPolicy() {
  return (
    <main className="pp-container">
      {/* Title */}
      <h1 className="pp-title">Privacy Policy</h1>
      <p className="pp-subtitle">Last updated October 01, 2025</p>

      <p className="pp-body">
        This Privacy Notice for{' '}
        <strong>VIQANTAI TECH SERVICES PRIVATE LIMITED</strong> ("we," "us," or
        "our") describes how and why we might access, collect, store, use,
        and/or share ("process") your personal information when you use our
        services ("Services"), including when you:
      </p>
      <ul className="pp-list">
        <li>
          Visit our website at{' '}
          <a
            href="http://www.viqantai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            www.viqantai.com
          </a>
          , or any website of ours that links to this Privacy Notice
        </li>
        <li>
          Engage with us in other related ways, including any marketing or
          events
        </li>
      </ul>
      <p className="pp-body pp-mb-lg">
        <strong>Questions or concerns?</strong> Reading this Privacy Notice will
        help you understand your privacy rights and choices. We are responsible
        for making decisions about how your personal information is processed.
        If you do not agree with our policies and practices, please do not use
        our Services. If you still have any questions or concerns, please
        contact us at{' '}
        <a href="mailto:connect@viqantai.com" className="pp-link">
          connect@viqantai.com
        </a>
        .
      </p>

      {/* Summary */}
      <Section title="Summary of Key Points">
        <p className="pp-italic">
          This summary provides key points from our Privacy Notice — click any
          link below, or use the table of contents, to jump to the full section.
        </p>
        <ul className="pp-list pp-spaced">
          <li>
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us, the choices you
            make, and the products and features you use. See{' '}
            <a href="#infocollect" className="pp-link">
              Personal information you disclose to us
            </a>
            .
          </li>
          <li>
            <strong>Do we process any sensitive personal information?</strong>{' '}
            We do not process sensitive personal information.
          </li>
          <li>
            <strong>Do we collect any information from third parties?</strong>{' '}
            We do not collect any information from third parties.
          </li>
          <li>
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. See{' '}
            <a href="#infouse" className="pp-link">
              How we process your information
            </a>
            .
          </li>
          <li>
            <strong>
              In what situations and with which parties do we share personal
              information?
            </strong>{' '}
            We may share information in specific situations with specific third
            parties. See{' '}
            <a href="#whoshare" className="pp-link">
              When and with whom we share your personal information
            </a>
            .
          </li>
          <li>
            <strong>What are your rights?</strong> Depending on where you are
            located, applicable privacy law may give you rights over your
            personal information. See{' '}
            <a href="#privacyrights" className="pp-link">
              Your privacy rights
            </a>
            .
          </li>
          <li>
            <strong>How do you exercise your rights?</strong> The easiest way is
            by submitting a{' '}
            <a
              href="https://app.termly.io/dsar/145dd5f9-093e-46b5-b1ae-e33b3701c9a8"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-link"
            >
              data subject access request
            </a>
            , or by contacting us directly.
          </li>
        </ul>
      </Section>

      {/* Table of Contents */}
      <nav className="pp-toc" id="toc">
        <h2 className="pp-heading">Table of Contents</h2>
        <TocLink href="#infocollect">
          1. What Information Do We Collect?
        </TocLink>
        <TocLink href="#infouse">
          2. How Do We Process Your Information?
        </TocLink>
        <TocLink href="#legalbases">
          3. What Legal Bases Do We Rely On To Process Your Personal
          Information?
        </TocLink>
        <TocLink href="#whoshare">
          4. When And With Whom Do We Share Your Personal Information?
        </TocLink>
        <TocLink href="#inforetain">
          5. How Long Do We Keep Your Information?
        </TocLink>
        <TocLink href="#infominors">
          6. Do We Collect Information From Minors?
        </TocLink>
        <TocLink href="#privacyrights">
          7. What Are Your Privacy Rights?
        </TocLink>
        <TocLink href="#dnt">8. Controls For Do-Not-Track Features</TocLink>
        <TocLink href="#uslaws">
          9. Do United States Residents Have Specific Privacy Rights?
        </TocLink>
        <TocLink href="#otherlaws">
          10. Do Other Regions Have Specific Privacy Rights?
        </TocLink>
        <TocLink href="#policyupdates">
          11. Do We Make Updates To This Notice?
        </TocLink>
        <TocLink href="#contact">
          12. How Can You Contact Us About This Notice?
        </TocLink>
        <TocLink href="#request">
          13. How Can You Review, Update, Or Delete The Data We Collect From
          You?
        </TocLink>
      </nav>

      {/* 1 */}
      <Section id="infocollect" title="1. What Information Do We Collect?">
        <h3 className="pp-subheading">
          Personal information you disclose to us
        </h3>
        <p>
          <em>
            <strong>In Short:</strong> We collect personal information that you
            provide to us.
          </em>
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and Services, when you participate in activities on the
          Services, or otherwise when you contact us.
        </p>
        <p>
          <strong>Personal Information Provided by You.</strong> The personal
          information we collect depends on the context of your interactions
          with us and the Services, the choices you make, and the products and
          features you use. It may include:
        </p>
        <ul className="pp-list">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
        </ul>
        <p>
          <strong>Sensitive Information.</strong> We do not process sensitive
          information.
        </p>
        <p>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <h3 className="pp-subheading pp-mt">
          Information automatically collected
        </h3>
        <p>
          <em>
            <strong>In Short:</strong> Some information — such as your Internet
            Protocol (IP) address and/or browser and device characteristics — is
            collected automatically when you visit our Services.
          </em>
        </p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>
        <p>The information we collect includes:</p>
        <ul className="pp-list">
          <li>
            <em>Log and Usage Data</em> — service-related, diagnostic, usage,
            and performance information our servers automatically collect when
            you access or use our Services, recorded in log files (IP address,
            device information, browser type and settings, activity timestamps,
            pages/files viewed, searches, features used, error reports, hardware
            settings).
          </li>
          <li>
            <em>Device Data</em> — information about the computer, phone,
            tablet, or other device you use to access the Services (IP address,
            device/application IDs, location, browser type, hardware model,
            ISP/mobile carrier, operating system, system configuration).
          </li>
          <li>
            <em>Location Data</em> — information about your device's location
            (precise or imprecise). You can opt out by disabling Location
            permissions on your device, though some Service features may then be
            unavailable.
          </li>
        </ul>

        <h3 className="pp-subheading pp-mt">Google API</h3>
        <p>
          Our use of information received from Google APIs adheres to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Google API Services User Data Policy
          </a>
          , including the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Limited Use requirements
          </a>
          .
        </p>
      </Section>

      {/* 2 */}
      <Section id="infouse" title="2. How Do We Process Your Information?">
        <p>
          <em>
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We may also
            process your information for other purposes with your consent.
          </em>
        </p>
        <p>
          <strong>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </strong>
        </p>
        <ul className="pp-list">
          <li>
            <strong>
              To deliver and facilitate delivery of services to the user
            </strong>{' '}
            — to provide you with the requested service.
          </li>
          <li>
            <strong>
              To respond to user inquiries / offer support to users
            </strong>{' '}
            — to respond to your inquiries and solve any potential issues you
            might have with the requested service.
          </li>
          <li>
            <strong>To send administrative information to you</strong> — details
            about our products and services, changes to our terms and policies,
            and other similar information.
          </li>
          <li>
            <strong>To fulfill and manage your orders</strong> — orders,
            payments, returns, and exchanges made through the Services.
          </li>
          <li>
            <strong>To enable user-to-user communications</strong> — if you
            choose to use any offering that allows communication with another
            user.
          </li>
          <li>
            <strong>To save or protect an individual's vital interest</strong> —
            when necessary to prevent harm.
          </li>
        </ul>
      </Section>

      {/* 3 */}
      <Section
        id="legalbases"
        title="3. What Legal Bases Do We Rely On To Process Your Information?"
      >
        <p>
          <em>
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (legal basis) to do so under applicable law — like with your
            consent, to comply with laws, to provide you with services or
            fulfill contractual obligations, to protect your rights, or to
            fulfill our legitimate business interests.
          </em>
        </p>

        <p className="pp-bold-underline">
          If you are located in the EU or UK, this section applies to you.
        </p>
        <p>
          The GDPR and UK GDPR require us to explain the valid legal bases we
          rely on to process your personal information:
        </p>
        <ul className="pp-list">
          <li>
            <strong>Consent</strong> — where you've given us permission for a
            specific purpose; you can withdraw consent at any time.
          </li>
          <li>
            <strong>Performance of a Contract</strong> — necessary to fulfill
            our contractual obligations to you, including providing our
            Services.
          </li>
          <li>
            <strong>Legal Obligations</strong> — necessary for compliance with
            legal obligations, such as cooperating with law enforcement or
            regulators, or defending legal rights.
          </li>
          <li>
            <strong>Vital Interests</strong> — necessary to protect your vital
            interests or those of a third party, such as situations involving
            potential threats to safety.
          </li>
        </ul>

        <p className="pp-bold-underline pp-mt">
          If you are located in Canada, this section applies to you.
        </p>
        <p>
          We may process your information with your express or implied consent,
          which you may{' '}
          <a href="#withdrawconsent" className="pp-link">
            withdraw
          </a>{' '}
          at any time. In some exceptional cases we may process information
          without consent as permitted by law, including:
        </p>
        <ul className="pp-list">
          <li>
            Collection clearly in the interests of an individual, where consent
            cannot be obtained in a timely way
          </li>
          <li>Investigations and fraud detection/prevention</li>
          <li>Business transactions, provided certain conditions are met</li>
          <li>
            Witness statements necessary to assess, process, or settle an
            insurance claim
          </li>
          <li>
            Identifying injured, ill, or deceased persons and communicating with
            next of kin
          </li>
          <li>
            Reasonable grounds to believe someone has been, is, or may be a
            victim of financial abuse
          </li>
          <li>
            Investigating a breach of an agreement or contravention of Canadian
            law
          </li>
          <li>
            Compliance with a subpoena, warrant, court order, or production
            rules
          </li>
          <li>
            Information produced in the course of employment, business, or
            profession, used consistently with why it was produced
          </li>
          <li>
            Collection solely for journalistic, artistic, or literary purposes
          </li>
          <li>
            Information that is publicly available as specified by regulations
          </li>
        </ul>
      </Section>

      {/* 4 */}
      <Section
        id="whoshare"
        title="4. When And With Whom Do We Share Your Personal Information?"
      >
        <p>
          <em>
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </em>
        </p>
        <p>
          We may need to share your personal information in the following
          situations:
        </p>
        <ul className="pp-list">
          <li>
            <strong>Business Transfers</strong> — in connection with, or during
            negotiations of, any merger, sale of company assets, financing, or
            acquisition of all or part of our business by another company.
          </li>
          <li>
            <strong>Affiliates</strong> — with our affiliates, who will be
            required to honor this Privacy Notice. Affiliates include our parent
            company and any subsidiaries, joint venture partners, or other
            companies under common control with us.
          </li>
          <li>
            <strong>Business Partners</strong> — to offer you certain products,
            services, or promotions.
          </li>
        </ul>
      </Section>

      {/* 5 */}
      <Section id="inforetain" title="5. How Long Do We Keep Your Information?">
        <p>
          <em>
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice,
            unless otherwise required by law.
          </em>
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements).
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize it, or, if
          that is not possible (e.g. information stored in backup archives), we
          will securely store it and isolate it from further processing until
          deletion is possible.
        </p>
      </Section>

      {/* 6 */}
      <Section
        id="infominors"
        title="6. Do We Collect Information From Minors?"
      >
        <p>
          <em>
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age (or the equivalent age as
            specified by law in your jurisdiction).
          </em>
        </p>
        <p>
          By using the Services, you represent that you are at least 18 (or the
          equivalent minimum age in your jurisdiction), or that you are the
          parent/guardian of a minor and consent to their use of the Services.
          If we learn that personal information from users under 18 has been
          collected, we will deactivate the account and take reasonable measures
          to promptly delete such data. If you become aware of any data we may
          have collected from children under 18, please contact us at{' '}
          <a href="mailto:connect@viqantai.com" className="pp-link">
            connect@viqantai.com
          </a>
          .
        </p>
      </Section>

      {/* 7 */}
      <Section id="privacyrights" title="7. What Are Your Privacy Rights?">
        <p>
          <em>
            <strong>In Short:</strong> Depending on your state of residence in
            the US, or in regions such as the EEA, UK, Switzerland, and Canada,
            you have rights that allow you greater access to and control over
            your personal information. You may review, change, or terminate your
            account at any time.
          </em>
        </p>
        <p>
          In some regions you have the right to (i) request access to and a copy
          of your personal information, (ii) request rectification or erasure,
          (iii) restrict processing, (iv) request data portability, and (v) not
          be subject to automated decision-making. If an automated decision
          produces legal or similarly significant effects, we will inform you,
          explain the main factors, and offer a way to request human review. You
          can also object to processing by contacting us — see{' '}
          <a href="#contact" className="pp-link">
            How Can You Contact Us About This Notice?
          </a>
          .
        </p>
        <p>
          If you are located in the UK and are unhappy with how we've handled
          your information, you can complain directly to us, in addition to your
          rights under the UK GDPR and Data Protection Act 2018.
        </p>

        <p className="pp-bold pp-mt">How to contact us:</p>
        <ul className="pp-list">
          <li>
            <strong>Online:</strong>{' '}
            <a
              href="https://www.viqantai.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-link"
            >
              www.viqantai.com/contact-us
            </a>
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:connect@viqantai.com" className="pp-link">
              connect@viqantai.com
            </a>
          </li>
          <li>
            <strong>Post:</strong> see{' '}
            <a href="#contact" className="pp-link">
              How Can You Contact Us About This Notice?
            </a>
          </li>
        </ul>

        <p className="pp-mt">What happens after you complain:</p>
        <ul className="pp-list">
          <li>
            We will acknowledge your complaint within 30 days of receiving it.
          </li>
          <li>We will investigate without unjustifiable or excessive delay.</li>
          <li>
            We will keep you informed of progress and explain the outcome.
          </li>
        </ul>
        <p>
          If you are not happy with our final response, you can refer your
          complaint to the Information Commissioner's Office (ICO), the UK
          supervisory authority — Website:{' '}
          <a
            href="http://ico.org.uk/make-a-complaint"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            ico.org.uk/make-a-complaint
          </a>
          , Helpline: 0303 123 1113, Post: Information Commissioner's Office,
          Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF.
        </p>
        <p>
          If you are in the EEA or UK and believe we are unlawfully processing
          your personal information, you may also complain to your{' '}
          <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Member State data protection authority
          </a>{' '}
          or the{' '}
          <a
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            UK data protection authority
          </a>
          . If in Switzerland, you may contact the{' '}
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Federal Data Protection and Information Commissioner
          </a>
          .
        </p>

        <p id="withdrawconsent" className="pp-mt">
          <strong className="pp-underline">Withdrawing your consent:</strong> If
          we rely on your consent to process your personal information, you have
          the right to withdraw it at any time by contacting us — see{' '}
          <a href="#contact" className="pp-link">
            How Can You Contact Us About This Notice?
          </a>
          . This won't affect the lawfulness of processing before withdrawal.
        </p>
        <p>
          <strong className="pp-underline">Opting out of marketing:</strong> You
          can unsubscribe from our marketing and promotional communications at
          any time by contacting us using the details in{' '}
          <a href="#contact" className="pp-link">
            How Can You Contact Us About This Notice?
          </a>
          . You may still receive service-related messages necessary for account
          administration.
        </p>
        <p>
          Questions or comments about your privacy rights? Email us at{' '}
          <a href="mailto:connect@viqantai.com" className="pp-link">
            connect@viqantai.com
          </a>
          .
        </p>
      </Section>

      {/* 8 */}
      <Section id="dnt" title="8. Controls For Do-Not-Track Features">
        <p>
          Most web browsers and some mobile operating systems include a
          Do-Not-Track ("DNT") feature you can activate to signal your
          preference not to have your online activity monitored and collected.
          No uniform technology standard for recognizing DNT signals has been
          finalized, so we do not currently respond to DNT browser signals. If a
          standard is adopted that we must follow in the future, we will update
          this Privacy Notice accordingly.
        </p>
      </Section>

      {/* 9 */}
      <Section
        id="uslaws"
        title="9. Do United States Residents Have Specific Privacy Rights?"
      >
        <p>
          <em>
            <strong>In Short:</strong> If you are a resident of California,
            Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may
            have the right to request access to and details about the personal
            information we maintain about you, correct inaccuracies, get a copy
            of, or delete your personal information, and to withdraw your
            consent to our processing.
          </em>
        </p>

        <h3 className="pp-subheading pp-mt">
          Categories of Personal Information We Collect
        </h3>
        <p>
          The table below shows the categories of personal information we have
          collected in the past twelve (12) months. See{' '}
          <a href="#infocollect" className="pp-link">
            What Information Do We Collect?
          </a>{' '}
          for the full inventory.
        </p>

        <div className="pp-table-wrap">
          <table className="pp-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Collected</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'A. Identifiers',
                  'Real name, alias, postal address, phone number, unique identifier, IP address, email address, account name',
                  'YES',
                ],
                [
                  'B. Personal info under CA Customer Records statute',
                  'Name, contact information, education, employment, employment history, financial information',
                  'NO',
                ],
                [
                  'C. Protected classification characteristics',
                  'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data',
                  'NO',
                ],
                [
                  'D. Commercial information',
                  'Transaction information, purchase history, financial details, payment information',
                  'NO',
                ],
                [
                  'E. Biometric information',
                  'Fingerprints and voiceprints',
                  'NO',
                ],
                [
                  'F. Internet or similar network activity',
                  'Browsing history, search history, online behavior, interest data, interactions with sites/apps/ads',
                  'NO',
                ],
                ['G. Geolocation data', 'Device location', 'NO'],
                [
                  'H. Audio, electronic, sensory, or similar information',
                  'Images, audio, video, or call recordings created in connection with our business activities',
                  'NO',
                ],
                [
                  'I. Professional or employment-related information',
                  'Business contact details, job title, work history, professional qualifications (e.g. if applying for a job)',
                  'NO',
                ],
                [
                  'J. Education Information',
                  'Student records and directory information',
                  'NO',
                ],
                [
                  'K. Inferences drawn from collected personal information',
                  'Profile or summary reflecting preferences and characteristics',
                  'NO',
                ],
                ['L. Sensitive personal information', '—', 'NO'],
              ].map(([category, examples, collected]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{examples}</td>
                  <td className="pp-center">{collected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pp-mt">
          We may also collect other personal information outside these
          categories through in-person, online, phone, or mail interactions in
          the context of: receiving help through customer support channels;
          participation in customer surveys or contests; and facilitating
          delivery of our Services and responding to inquiries.
        </p>
        <p>
          We use and retain <strong>Category A</strong> (Identifiers) for as
          long as the user has an account with us.
        </p>

        <h3 className="pp-subheading pp-mt">
          Will your information be shared with anyone else?
        </h3>
        <p>
          We may disclose your personal information to our service providers
          pursuant to a written contract between us and each provider — see{' '}
          <a href="#whoshare" className="pp-link">
            When And With Whom Do We Share Your Personal Information?
          </a>
          . We may use your personal information for our own business purposes,
          such as internal research for technological development — this is not
          considered "selling" your personal information. We have not disclosed,
          sold, or shared any personal information to third parties for a
          business or commercial purpose in the preceding twelve (12) months,
          and we will not sell or share personal information belonging to
          website visitors, users, and other consumers in the future.
        </p>

        <h3 className="pp-subheading pp-mt">Your Rights</h3>
        <p>
          You have rights under certain US state data protection laws,
          including:
        </p>
        <ul className="pp-list">
          <li>Right to know whether we are processing your personal data</li>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccuracies in your personal data</li>
          <li>Right to request deletion of your personal data</li>
          <li>
            Right to obtain a copy of the personal data you previously shared
            with us
          </li>
          <li>Right to non-discrimination for exercising your rights</li>
          <li>
            Right to opt out of processing for targeted advertising, sale, or
            profiling in furtherance of decisions with legal or similarly
            significant effects
          </li>
        </ul>
        <p>Depending on your state, you may also have the right to:</p>
        <ul className="pp-list">
          <li>
            Access the categories of personal data being processed (e.g.
            Minnesota)
          </li>
          <li>
            Obtain a list of categories of third parties we've disclosed data to
            (e.g. California, Delaware, Maryland)
          </li>
          <li>
            Obtain a list of specific third parties we've disclosed data to
            (e.g. Minnesota, Oregon)
          </li>
          <li>
            Obtain a list of third parties to which we've sold personal data
            (e.g. Connecticut)
          </li>
          <li>
            Review, question, and correct how personal data has been profiled
            (e.g. Connecticut, Minnesota)
          </li>
          <li>
            Limit use and disclosure of sensitive personal data (e.g.
            California)
          </li>
          <li>
            Opt out of collection via voice or facial recognition features (e.g.
            Florida)
          </li>
        </ul>

        <h3 className="pp-subheading pp-mt">How to Exercise Your Rights</h3>
        <p>
          To exercise these rights, contact us by submitting a{' '}
          <a
            href="https://app.termly.io/dsar/145dd5f9-093e-46b5-b1ae-e33b3701c9a8"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            data subject access request
          </a>
          , by emailing{' '}
          <a href="mailto:connect@viqantai.com" className="pp-link">
            connect@viqantai.com
          </a>
          , or via the contact details at the bottom of this document. Under
          certain US state laws, you can designate an authorized agent to submit
          a request on your behalf; we may deny requests lacking valid proof of
          authorization.
        </p>

        <h3 className="pp-subheading pp-mt">Request Verification</h3>
        <p>
          Upon receiving your request, we will verify your identity using only
          the information provided in your request, and may ask for additional
          information if we cannot verify identity from records already on file.
        </p>

        <h3 className="pp-subheading pp-mt">Appeals</h3>
        <p>
          If we decline to act on your request, you may appeal by emailing{' '}
          <a href="mailto:connect@viqantai.com" className="pp-link">
            connect@viqantai.com
          </a>
          . We will inform you in writing of our decision, including reasoning;
          if denied, you may submit a complaint to your state attorney general.
        </p>

        <h3 className="pp-subheading pp-mt">
          California "Shine The Light" Law
        </h3>
        <p>
          California Civil Code Section 1798.83 permits California resident
          users to request, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes, and the names/ addresses of
          those third parties in the preceding calendar year. Submit such
          requests in writing — see{' '}
          <a href="#contact" className="pp-link">
            How Can You Contact Us About This Notice?
          </a>
        </p>
      </Section>

      {/* 10 */}
      <Section
        id="otherlaws"
        title="10. Do Other Regions Have Specific Privacy Rights?"
      >
        <p>
          <em>
            <strong>In Short:</strong> You may have additional rights based on
            the country you reside in.
          </em>
        </p>

        <h3 className="pp-subheading">Australia and New Zealand</h3>
        <p>
          We collect and process your personal information under Australia's
          Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).
          This Privacy Notice satisfies both Acts' notice requirements —
          detailing what we collect, from which sources, for which purposes, and
          other recipients of your information.
        </p>
        <p>
          If you do not wish to provide necessary personal information, it may
          affect our ability to offer you products/services or respond to your
          requests. You have the right to request access to or correction of
          your personal information at any time — see{' '}
          <a href="#request" className="pp-link">
            How Can You Review, Update, Or Delete The Data We Collect From You?
          </a>
        </p>
        <p>
          If you believe we are unlawfully processing your information, you may
          complain about a breach of the Australian Privacy Principles to the{' '}
          <a
            href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Office of the Australian Information Commissioner
          </a>{' '}
          or a breach of New Zealand's Privacy Principles to the{' '}
          <a
            href="https://www.privacy.org.nz/your-rights/making-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            Office of the New Zealand Privacy Commissioner
          </a>
          .
        </p>

        <h3 className="pp-subheading pp-mt">Republic of South Africa</h3>
        <p>
          You have the right to request access to or correction of your personal
          information at any time — see{' '}
          <a href="#request" className="pp-link">
            How Can You Review, Update, Or Delete The Data We Collect From You?
          </a>{' '}
          If unsatisfied with our handling of a complaint, you may contact{' '}
          <a
            href="https://inforegulator.org.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            The Information Regulator (South Africa)
          </a>{' '}
          — general enquiries:{' '}
          <a href="mailto:enquiries@inforegulator.org.za" className="pp-link">
            enquiries@inforegulator.org.za
          </a>
          ; complaints (POPIA/PAIA form 5):{' '}
          <a
            href="mailto:PAIAComplaints@inforegulator.org.za"
            className="pp-link"
          >
            PAIAComplaints@inforegulator.org.za
          </a>{' '}
          &{' '}
          <a
            href="mailto:POPIAComplaints@inforegulator.org.za"
            className="pp-link"
          >
            POPIAComplaints@inforegulator.org.za
          </a>
          .
        </p>
      </Section>

      {/* 11 */}
      <Section
        id="policyupdates"
        title="11. Do We Make Updates To This Notice?"
      >
        <p>
          <em>
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </em>
        </p>
        <p>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated "Revised" date at the top of
          this Privacy Notice. If we make material changes, we may notify you by
          prominently posting a notice or by directly sending you a
          notification. We encourage you to review this Privacy Notice
          frequently.
        </p>
      </Section>

      {/* 12 */}
      <Section
        id="contact"
        title="12. How Can You Contact Us About This Notice?"
      >
        <p>
          If you have questions or comments about this notice, you may email us
          at{' '}
          <a href="mailto:connect@viqantai.com" className="pp-link">
            connect@viqantai.com
          </a>{' '}
          or contact us by post at:
        </p>
        <address className="pp-address">
          VIQANTAI TECH SERVICES PRIVATE LIMITED
          <br />
          Flat No. 402, Shiva Shivani Residency, Srinagar Colony
          <br />
          Nirmal, Telangana 504106
          <br />
          India
        </address>
      </Section>

      {/* 13 */}
      <Section
        id="request"
        title="13. How Can You Review, Update, Or Delete The Data We Collect From You?"
      >
        <p>
          Based on the applicable laws of your country or state of residence in
          the US, you may have the right to request access to the personal
          information we collect from you, details about how we've processed it,
          correct inaccuracies, or delete your personal information. You may
          also have the right to withdraw your consent to our processing of your
          personal information. These rights may be limited in some
          circumstances by applicable law.
        </p>
        <p>
          To request to review, update, or delete your personal information,
          please fill out and submit a{' '}
          <a
            href="https://app.termly.io/dsar/145dd5f9-093e-46b5-b1ae-e33b3701c9a8"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            data subject access request
          </a>
          .
        </p>
      </Section>

      <hr className="pp-hr" />
      <p className="pp-footer">
        This Privacy Policy was created using Termly's{' '}
        <a
          href="https://termly.io/products/privacy-policy-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="pp-underline"
        >
          Privacy Policy Generator
        </a>
        .
      </p>
    </main>
  );
}
