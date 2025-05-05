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
    role: "",
    bio: "Jewel has worked on ...",
    imageUrl: "/placeholder.svg?height=300&width=300",
    initials: "JA",
    degree: "Master of Finance"
  },
  {
    id: 3,
    name: "Jahangir Alam",
    role: "",
    bio: "Jahangir has worked on ...",
    imageUrl: "/placeholder.svg?height=300&width=300",
    initials: "JA",
    degree: "MBA Accounting"
  },
  {
    id: 4,
    name: "Shahed Chayan",
    role: "",
    bio: "Shahed has worked on ...",
    imageUrl: "/placeholder.svg?height=300&width=300",
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
