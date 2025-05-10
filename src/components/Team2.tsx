import Image from "next/image"

/** ——— Types ——— */
interface TeamMember {
  name: string
  title: string
  degrees: string[]          // ⬅ multiple degree entries
  bio: string
  avatar: string
  bgColor?: string           // ⬅ per-card background override
}

/** ——— Component ——— */
export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Jahangir Alam",
      title: "Member",
      degrees: ["MBA in Accounting"],
      bio: `Jahangir is a dynamic client-success manager with 20 years of experience
            in corporate financial accounting, payroll preparation, employer tax,
            bookkeeping, cost & profitability analysis, budgeting, financial
            reporting, and GAAP/IFRS compliance across diverse industries.`,
      avatar: "/jahangir_alam.jpg",
      bgColor: "bg-[#F3FAFF]",   // pale blue
    },
    {
      name: "Shahed Chayan",
      title: "Member",
      degrees: ["MBA", "BSc Computer Engineering"],
      bio: `Shahed specialises in corporate tax planning, compliance, and
            business analytics. His passion for client success has made him an
            invaluable contributor to the team.`,
      avatar: "/shahed_chayan.jpg",
      bgColor: "bg-[#FFF7ED]",   // pale peach
    },
    {
      name: "Jewel Ashraf",
      title: "Advisor",
      degrees: ["MS in Finance", "MBA", "Master of Management"],
      bio: `For 20+ years Jewel has provided leadership in corporate finance,
            accounting, auditing, HR, and business administration. His advisory
            role helps us consistently exceed client expectations.`,
      avatar: "/jewel_ashraf.jpg",
      bgColor: "bg-[#F1FDF6]",   // pale green
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-6xl font-bold text-center mb-12">Our Team</h1>

      {/* ——— CEO ——— */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="bg-[#f8ffcc] dark:bg-[#243B55] p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold">Sakiya Ashraf, Head of Operations</h2>
          <p className="font-medium mb-4">BBS Accounting</p>
          <blockquote className="italic text-lg leading-relaxed">
            “I believe that the strength of our team and our adaptability in a
            constantly changing business environment make us exceptional
            partners for our clients. Our motto is to exceed ourselves through
            client satisfaction.”
          </blockquote>
        </div>
      </section>

      {/* ——— Leadership ——— */}
      <h2 className="text-2xl font-bold mb-8">Meet Our Leadership Team</h2>

      <div className="space-y-8">
        {teamMembers.map((m) => (
          <article
            key={m.name}
            className={`flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl shadow-sm ${m.bgColor ?? "bg-muted"}`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 border-2 border-muted">
                <Image
                  src={m.avatar || "/placeholder.svg"}
                  alt={m.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-lg text-muted-foreground">{m.title}</p>

              {/* Degree badges */}
              <ul className="flex flex-wrap gap-2 my-2">
                {m.degrees.map((deg) => (
                  <li
                    key={deg}
                    className="text-xs font-medium uppercase bg-black/10 dark:bg-white/10 px-2 py-1 rounded-full whitespace-nowrap"
                  >
                    {deg}
                  </li>
                ))}
              </ul>

              <p>{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
