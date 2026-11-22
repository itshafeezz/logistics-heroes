export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  salary: number;
  type: "Full-time" | "Part-time" | "Contract";
  category: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    company: "Flipkart Logistics",
    title: "Delivery Executive",
    location: "Mumbai, Maharashtra",
    salary: 25000,
    type: "Full-time",
    category: "Last Mile Delivery",
    posted: "2 days ago",
    description:
      "Join Flipkart's last-mile delivery team and help deliver packages to millions of customers across Mumbai. You'll be responsible for timely and safe delivery of packages within your assigned zone.",
    requirements: [
      "Valid driving license (two-wheeler)",
      "Smartphone with GPS",
      "Knowledge of local routes",
      "Good communication skills",
      "Minimum 10th pass",
    ],
    benefits: [
      "Weekly payouts",
      "Fuel allowance",
      "Health insurance",
      "Performance bonuses",
    ],
    logo: "F",
  },
  {
    id: "2",
    company: "Delhivery",
    title: "Warehouse Associate",
    location: "Delhi NCR",
    salary: 22000,
    type: "Full-time",
    category: "Warehousing",
    posted: "1 day ago",
    description:
      "Work in our state-of-the-art fulfilment center sorting and organizing packages. Help maintain inventory accuracy and ensure efficient order processing.",
    requirements: [
      "Physically fit for standing shifts",
      "Basic literacy and numeracy",
      "Willingness to work night shifts",
      "Team player",
    ],
    benefits: [
      "PF and ESI coverage",
      "Overtime pay",
      "Meals provided",
      "Career growth path",
    ],
    logo: "D",
  },
  {
    id: "3",
    company: "BlueDart Express",
    title: "Fleet Supervisor",
    location: "Bangalore, Karnataka",
    salary: 35000,
    type: "Full-time",
    category: "Fleet Management",
    posted: "3 days ago",
    description:
      "Manage a fleet of 20+ delivery vehicles. Coordinate routes, monitor driver performance, and ensure on-time delivery rates above 95%.",
    requirements: [
      "3+ years logistics experience",
      "Leadership and management skills",
      "Proficient in route planning software",
      "Valid heavy vehicle license preferred",
    ],
    benefits: [
      "Company vehicle",
      "Medical insurance for family",
      "Annual bonus",
      "Paid leave - 24 days",
    ],
    logo: "B",
  },
  {
    id: "4",
    company: "Amazon Transportation",
    title: "Sortation Associate",
    location: "Hyderabad, Telangana",
    salary: 20000,
    type: "Full-time",
    category: "Warehousing",
    posted: "5 hours ago",
    description:
      "Join Amazon's sortation center team. Scan, sort, and organize packages for dispatch to delivery stations across the region.",
    requirements: [
      "Comfortable with physical work",
      "Basic smartphone skills",
      "Flexible with shift timings",
      "No prior experience needed",
    ],
    benefits: [
      "Day-1 health insurance",
      "Free skill training",
      "Subsidized meals",
      "Internal transfer opportunities",
    ],
    logo: "A",
  },
  {
    id: "5",
    company: "Rivigo",
    title: "Long Haul Truck Driver",
    location: "Pan India",
    salary: 40000,
    type: "Full-time",
    category: "Transportation",
    posted: "1 week ago",
    description:
      "Drive relay-model trucks across India's highways. Each leg is 4-5 hours with rest stops at Rivigo's pitstops. Modern trucks with AC cabins.",
    requirements: [
      "Heavy vehicle driving license",
      "Minimum 2 years truck driving experience",
      "Clean driving record",
      "Comfortable with highway driving",
    ],
    benefits: [
      "Highest industry pay",
      "Rest at pitstops",
      "Life and health insurance",
      "Fuel and toll covered",
    ],
    logo: "R",
  },
  {
    id: "6",
    company: "Shadowfax",
    title: "Bike Delivery Partner",
    location: "Chennai, Tamil Nadu",
    salary: 18000,
    type: "Part-time",
    category: "Last Mile Delivery",
    posted: "12 hours ago",
    description:
      "Deliver food and packages on your own bike. Flexible hours - work as much or as little as you want. Earn per delivery with surge pricing during peak hours.",
    requirements: [
      "Own two-wheeler with valid documents",
      "Smartphone with internet",
      "Knowledge of Chennai roads",
      "Min age 18 years",
    ],
    benefits: [
      "Flexible working hours",
      "Daily earnings withdrawal",
      "Accident insurance",
      "Referral bonuses",
    ],
    logo: "S",
  },
  {
    id: "7",
    company: "Ecom Express",
    title: "Branch Operations Manager",
    location: "Pune, Maharashtra",
    salary: 45000,
    type: "Full-time",
    category: "Operations",
    posted: "4 days ago",
    description:
      "Manage end-to-end branch operations including staff management, delivery performance, customer escalations, and P&L responsibility for the Pune hub.",
    requirements: [
      "MBA or equivalent preferred",
      "5+ years in logistics operations",
      "Strong analytical skills",
      "People management experience",
    ],
    benefits: [
      "Performance-linked incentives",
      "Company laptop and phone",
      "Relocation support",
      "Leadership training programs",
    ],
    logo: "E",
  },
  {
    id: "8",
    company: "XpressBees",
    title: "Supply Chain Analyst",
    location: "Pune, Maharashtra",
    salary: 50000,
    type: "Full-time",
    category: "Supply Chain",
    posted: "6 days ago",
    description:
      "Analyze supply chain data to optimize delivery routes, reduce costs, and improve delivery timelines. Work with cross-functional teams to implement data-driven decisions.",
    requirements: [
      "Bachelor's in Engineering/Analytics",
      "Proficiency in Excel and SQL",
      "Experience with BI tools (Tableau/PowerBI)",
      "2+ years in supply chain or logistics",
    ],
    benefits: [
      "Stock options (ESOP)",
      "Flexible work hours",
      "Learning budget",
      "Health insurance for family",
    ],
    logo: "X",
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function getCategories(): string[] {
  return [...new Set(jobs.map((job) => job.category))];
}

export function formatSalary(salary: number): string {
  return new Intl.NumberFormat("en-IN").format(salary);
}
