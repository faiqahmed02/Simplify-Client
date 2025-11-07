import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tasks = [
  { id: 1, title: "Initial Design Mockups", status: "completed", date: "Mar 15, 2024" },
  { id: 2, title: "Homepage Development", status: "completed", date: "Mar 22, 2024" },
  { id: 3, title: "About Page Implementation", status: "in-progress", date: "Mar 28, 2024" },
  { id: 4, title: "Contact Form Integration", status: "pending", date: "Apr 5, 2024" },
  { id: 5, title: "SEO Optimization", status: "pending", date: "Apr 12, 2024" },
]

const milestones = [
  { title: "Project Kickoff", date: "Mar 1, 2024", completed: true },
  { title: "Design Approval", date: "Mar 15, 2024", completed: true },
  { title: "Development Phase", date: "Mar 20, 2024", completed: true },
  { title: "Client Review", date: "Apr 1, 2024", completed: false },
  { title: "Launch", date: "Apr 15, 2024", completed: false },
]

export function ClientOverview() {
  return (
    <div className="space-y-6">
      {/* Project Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Completion</span>
              <span className="font-semibold text-lg">75%</span>
            </div>
            <Progress value={75} className="h-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Completed</span>
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Tasks finished</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">In Progress</span>
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-muted-foreground">Active tasks</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Pending</span>
                <Circle className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-muted-foreground">Upcoming tasks</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                  {task.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  ) : task.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">{task.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{task.date}</p>
                  </div>
                  <Badge
                    variant={
                      task.status === "completed" ? "default" : task.status === "in-progress" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {task.status === "completed" ? "Done" : task.status === "in-progress" ? "Active" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`mt-1 rounded-full p-1 ${milestone.completed ? "bg-accent" : "bg-muted"}`}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 pb-4 border-l-2 border-border pl-4 ml-2 last:border-0">
                    <p
                      className={`font-medium text-sm ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {milestone.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
