import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
  initials: string
  degree: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sakiya Ashraf",
    role: "Chief of Operations",
    bio: "Sakiyah manages the operations of the company, ensuring client satisfaction and retention.",
    imageUrl: "/placeholder.svg?height=300&width=300",
    initials: "SA",
    degree: "Bachelor in Business Studies, Accounting Major",
  },
  {
    id: 2,
    name: "Jewel Ashraf",
    role: "Advisor",
    bio: "Jewel is a strategic leader of financial management with 360 background in business administration. He has Master of Finance, Master of Business Administration, Master of Management. He studied in Cost and Management Accounting  post graduate courses. For more than last 20 years he has been playing a vital leadership rule in corporate finance, accounting, auditing, HR, and business administration of different industries. Jewel’s advisory rule is helping us to meet our client satisfaction. ",
    imageUrl: "/jewel_ashraf.jpg",
    initials: "JA",
    degree: "Master of Finance"
  },
  {
    id: 3,
    name: "Jahangir Alam",
    role: "Member",
    bio: "Jahangir is a dynamic client success  manager having 20 years of experience in corporate financial accounting including payroll preparation, employer tax, bookkeeping, cost and profitability analysis, budgeting, financial reporting and compliance under GAAP and IFRS standards. He worked for diverse industries. ",
    imageUrl: "/jahangir_alam.jpg",
    initials: "JA",
    degree: "MBA Accounting"
  },
  {
    id: 4,
    name: "Shahed Chayan",
    role: "Member",
    bio: "Shahed is specialized in corporate and compliance environment. He graduated in computer engineering. He also studied in business administration and completed his masters in banking. He passionate attitude to help client made him one of the successful contributors in the team. He is specialized in business analytics, corporate tax planning and compliance.",
    imageUrl: "/shahed_chayan.jpg",
    initials: "SC",
    degree: "MBA Banking "
  },
]

export default function TeamPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the talented individuals who make our company successful. We&apos;re a diverse group of professionals
          dedicated to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="aspect-square relative bg-muted">
              <Avatar className="h-full w-full rounded-none">
                <AvatarImage src={member.imageUrl || "/placeholder.svg"} alt={member.name} className="object-cover" />
                <AvatarFallback className="text-4xl rounded-none h-full w-full">{member.initials}</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="p-4">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <span className="bg-[#e8fc8c] text-black text-sm rounded-b-md px-3 py-1">{member.degree}</span>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
