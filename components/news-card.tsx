import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  image?: string
}

export function NewsCard({ title, excerpt, date, category, slug, image }: NewsCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-[#032133]">
            {category}
          </Badge>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <Link href={slug} className="hover:underline">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={slug} className="text-[#032133] font-medium flex items-center hover:underline">
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
