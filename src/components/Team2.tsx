import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jahangir Alam",
      title: "Member",
      degrees: "MBA in Accounting",
      bio: "Jahangir is a dynamic client success  manager having 20 years of experience in corporate financial accounting including payroll preparation, employer tax, bookkeeping, cost and profitability analysis, budgeting, financial reporting and compliance under GAAP and IFRS standards. He worked for diverse industries.Jane has over 15 years of experience in technology leadership. She previously led engineering teams at major tech companies and brings a wealth of knowledge in AI and machine learning.",
      avatar: "/jahangir_alam.jpg",
    },
    {
      name: "Shahed Chayan",
      title: "Member",
      degrees: "CPA, MBA in Finance",
      bio: "Shahed is specialized in corporate and compliance environment. He graduated in computer engineering. He also studied in business administration and completed his masters in banking. He is passionate in helping client and it has made him a very successful contributors in the team. He is specialized in business analytics, corporate tax planning and compliance.",
      avatar: "/shahed_chayan.jpg",
    },
    {
      name: "Jewel Ashraf",
      title: "Advisor",
      degrees: "MS in Marketing, BA in Communications",
      bio: "Jewel is a strategic leader of financial management with 360 background in business administration. He has Master of Finance, Master of Business Administration, Master of Management. He also studied in Cost and Management Accounting post graduate courses. For more than last 20 years he has been playing a vital leadership rule in corporate finance, accounting, auditing, HR, and business administration of different industries. Jewel's advisory role assists us in meeting our client satisfaction.",
      avatar: "/jewel_ashraf.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Team</h1>

      {/* CEO Section */}
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Sakiya Ashraf, CEO</h2>
          <h3 className="text-xl font-regular mb-2">BBS Accounting</h3>
          <blockquote className="text-lg italic">
            &quot;I believe that the strength in our team and our ability to deal with constantly changing business 
            environment is what makes us great partners with our clients. 
            This is why I am proud to be in the team. Our motto is to exceed ourselves through client satisfaction.&quot;
          </blockquote>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="space-y-12">
        <h2 className="text-2xl font-bold mb-8">Meet Our Leadership Team</h2>

        <div className="space-y-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 border-2 border-muted">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-lg text-muted-foreground">{member.title}</p>
                <p className="text-sm italic mb-2">{member.degrees}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
