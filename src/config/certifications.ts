/**
 * ════════════════════════════════════════════════════════════════
 *  CERTIFICATIONS: edit your certificates here
 * ════════════════════════════════════════════════════════════════
 *
 * To add one:
 *   1. Put the PDF in /public/certificates/ (and optionally a preview image).
 *   2. Copy an entry below and fill it in.
 *
 * Fields left as "" are hidden. Only list what the certificate itself states.
 */
export interface Certification {
  title: string;
  issuer: string;
  /** e.g. "Offered through Coursera". */
  via?: string;
  /** As printed on the certificate. Leave "" if no date is shown. */
  date: string;
  /** Short label, e.g. "Course certificate". */
  type: string;
  /** Topic labels taken from the certificate title or description. */
  topics: string[];
  /** Preview image in /public/certificates/. */
  image: string;
  /** The certificate file, opened in a new tab. */
  file: string;
  /** Official verification link, if the certificate provides one. */
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    title: "One Million Prompters",
    issuer: "Dubai Future Foundation & Dubai Centre for Artificial Intelligence",
    date: "",
    type: "Certificate of completion",
    topics: ["Prompt engineering", "AI systems"],
    image: "certificates/one-million-prompters.webp",
    file: "certificates/one-million-prompters.pdf",
    verifyUrl: "",
  },
  {
    title: "Core 2: OS, Software, Security and Operational Procedures",
    issuer: "IBM",
    via: "Offered through Coursera",
    date: "Aug 5, 2025",
    type: "Course certificate",
    topics: ["Operating systems", "Software", "Security", "Operational procedures"],
    image: "certificates/ibm-core-2-os-software-security.webp",
    file: "certificates/ibm-core-2-os-software-security.pdf",
    verifyUrl: "https://coursera.org/verify/EOHZ3ZCZ7V59",
  },
  {
    title: "Core 1: Hardware and Network Troubleshooting",
    issuer: "IBM",
    via: "Offered through Coursera",
    date: "Jun 26, 2025",
    type: "Course certificate",
    topics: ["Hardware", "Networking", "Troubleshooting"],
    image: "certificates/ibm-core-1-hardware-network-troubleshooting.webp",
    file: "certificates/ibm-core-1-hardware-network-troubleshooting.pdf",
    verifyUrl: "https://coursera.org/verify/XOYOY0HKSXYQ",
  },
];
