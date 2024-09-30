const rules = {
    usa: `
    <h3>United States</h3>
    <ul>
        <li><strong>State-Specific Laws:</strong>
            <ul>
                <li><strong>California Consumer Privacy Act (CCPA):</strong> Businesses must notify consumers about data collection, provide the right to opt out of data sales, and allow access and deletion of personal information.</li>
                <li><strong>Virginia Consumer Data Protection Act (VCDPA):</strong> Similar to CCPA, with additional obligations around data minimization and the use of sensitive data.</li>
            </ul>
        </li>
        <li><strong>Sectoral Regulations:</strong>
            <ul>
                <li><strong>HIPAA:</strong> Health data and medical records must be protected under HIPAA, including encryption and regular audits of data security practices.</li>
                <li><strong>GLBA (Gramm-Leach-Bliley Act):</strong> Financial institutions must implement safeguards to protect customers' personal financial information.</li>
                <li><strong>FERPA (Family Educational Rights and Privacy Act):</strong> Governs access to educational records and personally identifiable information of students.</li>
            </ul>
        </li>
        <li><strong>Data Breach Notifications:</strong> Almost all U.S. states have laws requiring businesses to notify individuals and state authorities in the event of a personal data breach. The timing and penalties vary by state.</li>
        <li><strong>Cross-Border Data Transfers:</strong> The U.S. does not have a general law regulating data transfers, but businesses must ensure compliance with international frameworks (e.g., Privacy Shield, Standard Contractual Clauses).</li>
    </ul>
    <h4>Recommended Databases for the United States</h4>
    <ul>
        <li><strong>MongoDB:</strong> Ideal for scalable, document-based storage, commonly used in industries like healthcare, finance, and retail due to its flexible schema and robust security features.</li>
        <li><strong>MySQL:</strong> Widely used for transactional data and compliance-heavy applications. It supports encryption and access controls, making it suitable for financial and healthcare applications under HIPAA and GLBA.</li>
        <li><strong>Amazon RDS:</strong> A managed relational database that simplifies deployment, security, and scaling while ensuring compliance with U.S. regulations such as CCPA and HIPAA.</li>
    </ul>
    `,
    india: `
    <h3>India</h3>
    <ul>
        <li><strong>Digital Personal Data Protection Act (DPDPA), 2023:</strong>
            <ul>
                <li>Requires companies to collect personal data only after obtaining clear and explicit consent.</li>
                <li>Individuals have the right to access, correct, erase, and port their data.</li>
                <li>Organizations must minimize data collection, processing only what's necessary for specific purposes.</li>
                <li>There are stringent penalties for data breaches, with companies obligated to notify individuals and the government.</li>
            </ul>
        </li>
        <li><strong>Data Localization:</strong> Sensitive data in sectors like banking and telecom must be stored within Indian borders. Cross-border data transfers can only occur to approved jurisdictions or with government approval.</li>
        <li><strong>Cross-Border Data Transfers:</strong> The government determines which countries can receive personal data. If transferring data to a non-approved country, the organization must ensure sufficient safeguards like Standard Contractual Clauses.</li>
        <li><strong>Data Retention Policies:</strong> Organizations must set time limits on how long data can be stored and ensure secure deletion of unnecessary data.</li>
    </ul>
    <h4>Recommended Databases for India</h4>
    <ul>
        <li><strong>MySQL:</strong> Excellent for government-approved financial institutions due to its robust transactional capabilities and compliance with Indian data localization laws in sectors like banking.</li>
        <li><strong>MongoDB (Self-Hosted):</strong> For companies needing flexibility, MongoDB can be self-hosted within India to comply with data localization laws.</li>
        <li><strong>PostgreSQL:</strong> Suitable for enterprises needing a relational database with strong consistency, and it can be self-hosted to comply with Indian government localization requirements.</li>
    </ul>
    `,
    china: `
    <h3>China</h3>
    <ul>
        <li><strong>Personal Information Protection Law (PIPL):</strong>
            <ul>
                <li>Requires organizations to obtain informed consent before collecting personal data. Data collection should be lawful, necessary, and have a clear purpose.</li>
                <li>Individuals have the right to access, correct, delete, and restrict processing of their personal data.</li>
                <li>Data processors must appoint a data protection officer if they handle large volumes of personal data.</li>
            </ul>
        </li>
        <li><strong>Data Localization:</strong> Critical personal data must be stored within China. Cross-border data transfers are highly restricted and subject to government approval, especially for sensitive data.</li>
        <li><strong>Cybersecurity Law (CSL):</strong>
            <ul>
                <li>Applies to network operators and mandates stringent data security practices including regular security assessments, secure data storage, and breach notifications.</li>
                <li>Companies must ensure they have appropriate cybersecurity infrastructure and protocols in place to protect against breaches.</li>
            </ul>
        </li>
        <li><strong>Security Assessments:</strong> Organizations that transfer sensitive personal information outside China must conduct impact assessments and report to regulatory authorities before the transfer.</li>
    </ul>
    <h4>Recommended Databases for China</h4>
    <ul>
        <li><strong>Alibaba Cloud ApsaraDB:</strong> A cloud-based database service provided by Alibaba, compliant with China’s data localization and cybersecurity laws, making it ideal for businesses within China.</li>
        <li><strong>MySQL (Self-Hosted in China):</strong> For businesses that need control over their data and want to ensure full compliance with Chinese data localization requirements.</li>
        <li><strong>Tencent Cloud Database:</strong> Another cloud-based database platform that ensures compliance with China’s strict PIPL and data localization laws, suitable for companies operating within China.</li>
    </ul>
    `,
    uk: `
    <h3>United Kingdom</h3>
    <ul>
        <li><strong>UK GDPR:</strong>
            <ul>
                <li>Businesses must process data lawfully, fairly, and transparently. They must obtain clear consent and explain how the data will be used.</li>
                <li>Individuals have the right to access, rectify, and erase their data. They can also request that data processing be restricted or transferred to another organization.</li>
                <li>Data should only be processed for specific purposes and must be minimized to what is necessary for those purposes.</li>
            </ul>
        </li>
        <li><strong>Data Breach Notification:</strong> Companies must report significant data breaches to the Information Commissioner’s Office (ICO) within 72 hours and notify affected individuals if there’s a high risk to their rights and freedoms.</li>
        <li><strong>Cross-Border Data Transfers:</strong> Personal data can only be transferred to countries outside the UK that provide an adequate level of protection or through Standard Contractual Clauses.</li>
        <li><strong>Data Protection Act (DPA) 2018:</strong> Enforces UK GDPR and provides additional provisions for law enforcement, intelligence services, and immigration processing.</li>
    </ul>
    <h4>Recommended Databases for the United Kingdom</h4>
    <ul>
        <li><strong>Amazon RDS (UK-based):</strong> Ideal for businesses needing fully managed relational databases with GDPR compliance. AWS offers UK-based hosting to comply with data localization laws.</li>
        <li><strong>MongoDB Atlas (UK Region):</strong> A scalable cloud-based document database with built-in security and compliance with UK GDPR and data protection laws.</li>
        <li><strong>Azure SQL Database:</strong> Hosted within Microsoft’s UK data centers, Azure SQL ensures compliance with UK GDPR and offers extensive security features.</li>
    </ul>
    `
};

function displayRules() {
    const selectedCountry = document.getElementById("country-select").value;
    const rulesContainer = document.getElementById("rules-text");

    if (selectedCountry && rules[selectedCountry]) {
        rulesContainer.innerHTML = rules[selectedCountry];
    } else {
        rulesContainer.innerHTML = "Please select a country to view its data privacy regulations and recommended databases.";
    }
}
