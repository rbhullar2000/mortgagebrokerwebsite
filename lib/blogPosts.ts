export default function BlogPage() {
  // Sample blog posts - in a real implementation, these would come from a CMS or database
  const blogPosts = [
    {
      title: "Retirement Planning",
      excerpt:
        "Many Canadians have significant equity tied up in their homes — but are unsure how to use it in retirement. This article explores smart strategies like reverse mortgages, HELOCs, and refinancing to unlock that value and live with more financial flexibility.",
      date: "June 26, 2025",
      category: "Retirement Planning",
      slug: "/blog/rethinking-retirement-home-equity",
      featured: true,
      image: "retirement-home-equity.png",
    },
    
    {
      title: "Are Variable Rates Still Worth It in 2025? It Depends…",
      excerpt:
        "The fixed vs. variable debate is heating up again in 2025. With forecasts suggesting lower rates ahead, should you lock in fixed for stability or ride the wave with variable?",
      date: "May 1, 2025",
      category: "Rate Analysis",
      slug: "/blog/are-variable-rates-still-worth-it-2025",
      featured: false,
      image: "fixed-vs-variable-rates.png",
    },
    {
      title: "Bank of Canada Holds Key Interest Rate at 2.75%: What It Means for Your Mortgage",
      excerpt:
        "At its June 4 meeting the Bank of Canada opted to keep the overnight rate steady at 2.75 percent. Learn why the Bank paused and what it means for homeowners and buyers.",
      date: "June 17, 2025",
      category: "Interest Rates",
      slug: "/blog/bank-of-canada-holds-key-interest-rate-June-2025",
      featured: false,
      image: "/bank-of-canada-building.png?height=300&width=600",
    },
    {
      title: "Bank of Canada Cuts Key Interest Rate to 2.75%",
      excerpt:
        "On March 12, 2025, the Bank of Canada reduced its overnight rate target to 2.75%, marking a significant shift in monetary policy and offering much-needed relief to mortgage holders across the country.",
      date: "March 12, 2025",
      category: "Interest Rates",
      slug: "/blog/bank-of-canada-cuts-rates-March-2025",
      featured: false,
      image: "bank-of-canada-building.png",
    },
    {
      title: "First-Time Home Buyer Incentive Changes",
      excerpt:
        "The federal government announced changes to the First-Time Home Buyer Incentive program, increasing the eligible home price threshold in high-cost markets.",
      date: "May 22, 2025",
      category: "Government Programs",
      slug: "/blog/first-time-home-buyer-incentive-changes",
      featured: false,
      image: "first-time-homebuyer-family.png",
    },
    {
      title: "Vancouver Housing Market Update",
      excerpt:
        "Vancouver's housing market shows signs of stabilizing after months of price increases. Sales volume has decreased while inventory has slightly increased.",
      date: "May 15, 2025",
      category: "Market Updates",
      slug: "/blog/vancouver-housing-market-update",
      featured: false,
      image: "vancouver-skyline-housing.png",
    },
    //        {
    //      title: "Fixed vs. Variable: Which is Right for You?",
    //      excerpt:
    //        "With interest rates stabilizing, many homebuyers are wondering whether to choose a fixed or variable rate mortgage. Here's what you need to consider.",
    //      date: "May 8, 2025",
    //      category: "Mortgage Tips",
    //      slug: "/blog/fixed-vs-variable-which-is-right-for-you",
    //      featured: false,
    //      image: "fixed-vs-variable-rates.png",
    //    },
    {
      title: "How to Improve Your Credit Score for Better Mortgage Rates",
      excerpt:
        "Your credit score has a significant impact on the mortgage rates you qualify for. Learn practical steps to improve your score before applying.",
      date: "April 30, 2025",
      category: "Credit Tips",
      slug: "/blog/improve-credit-score-for-better-mortgage-rates",
      featured: false,
      image: "credit-score-improvement.png",
    },
    //    {
    //      title: "Understanding Mortgage Stress Tests in 2024",
    //      excerpt:
    //        "Mortgage stress tests continue to impact homebuyers across Canada. Learn how the current rules work and how to prepare for them.",
    //      date: "April 22, 2025",
    //      category: "Regulations",
    //      slug: "/blog/understanding-mortgage-stress-tests-2024",
    //      featured: false,
    //      image: "stress-test-calculator.png",
    //    },
  ]
