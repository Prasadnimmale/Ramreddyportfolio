export const siteData = {
  domain: "https://lawyer-example.com",
  lawyer: {
    name: "Medapati Rama Reddy",
    shortName: "Medapati Rama Reddy",
    title: "Advocate",
    introduction:
      "Dedicated legal professional offering comprehensive legal services across a wide range of practice areas in Andhra Pradesh and beyond.",
    statement:
      "Committed to upholding justice with integrity, diligence, and an unwavering focus on client outcomes. Every case deserves meticulous attention and strategic counsel.",
  },
  office: {
    name: "Medapati Rama Reddy — Advocate",
    address: "D No 23-7-7/1, Duggiralavari Street (Pulavarthi Vari Street)",
    landmarks: "Beside Good Choice School, Opposite Bhavani Function Hall",
    city: "Kakinada Bazaar, Kakinada – 533001, Andhra Pradesh, India",
    phone: "+91 9059439999",
    email: "",
    hours: {
      week: "9:00 AM – 9:00 PM",
      sunday: "11:00 AM – 8:00 PM",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "D No 23-7-7/1, Duggiralavari Street, Kakinada Bazaar, Kakinada 533001, Andhra Pradesh, India"
      ),
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Office", href: "#office" },
    { label: "Let's Connect", href: "#contact" },
  ],
};

export const practiceAreas = [
  { title: "Drafting", icon: "FileText" as const },
  { title: "Divorce Case", icon: "Scale" as const },
  { title: "Family Case", icon: "Users" as const },
  { title: "Matrimonial Case", icon: "Heart" as const },
  { title: "Consumer Rights", icon: "ShieldCheck" as const },
  { title: "Civil Case", icon: "Landmark" as const },
  { title: "Litigation", icon: "Gavel" as const },
  { title: "Registration – AP2312/201_", icon: "ClipboardList" as const },
  { title: "RTI", icon: "Info" as const },
  { title: "Will", icon: "ScrollText" as const },
  { title: "Bail Matter", icon: "Unlock" as const },
  { title: "Cheque Bounce", icon: "Banknote" as const },
  { title: "Child Custody", icon: "Baby" as const },
  { title: "Property Case", icon: "Building2" as const },
];

export const experience = [
  {
    position: "Advocate",
    organization: "Kakinada Bar Association",
    employment: "Self-employed",
    period: "Nov 2016 – Present",
    location: "Kakinada, Andhra Pradesh, India",
    workMode: undefined,
  },
  {
    position: "Advocate",
    organization: "Gayatri Law Chambers",
    employment: "Full-time",
    period: "Nov 2016 – Present",
    location: undefined,
    workMode: undefined,
  },
  {
    position: "Advocate",
    organization: "A.P. High Court",
    employment: "Self-employed",
    period: "Nov 2016 – Present",
    location: "Amaravati mandal, India",
    workMode: undefined,
  },
];

export const education = [
  {
    institution: "Acharya Nagarjuna University",
    qualification: "Master of Laws – LLM",
    specialization:
      "Banking, Corporate, Finance, and Securities Law",
    period: "Mar 2016 – Apr 2018",
    grade: "First Class",
  },
  {
    institution: "Andhra University",
    qualification: "Bachelor of Laws – LLB",
    specialization:
      "Banking, Corporate, Finance, and Securities Law",
    period: "Mar 2011 – Feb 2016",
    grade: undefined,
  },
  {
    institution: "Microsoft Education Partner",
    qualification: "M.C.S.E.",
    specialization: undefined,
    description: "Microsoft Certified System Engineer",
    period: "Aug 2012 – Sep 2014",
    grade: "A",
  },
  {
    institution: "Col D.S. Raju Polytechnic",
    qualification: "D.E.C.E.",
    specialization:
      "Electrical, Electronics and Communications Engineering",
    period: "Mar 1991 – May 1994",
    grade: "Distinction",
  },
];
