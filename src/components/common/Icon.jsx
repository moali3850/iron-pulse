import { Zap, Dumbbell, Clock, Trophy, Target, Users, Heart } from "lucide-react"

const icons = { zap: Zap, dumbbell: Dumbbell, clock: Clock, trophy: Trophy, target: Target, users: Users, heart: Heart }

export default function Icon({ name, className = "", size = 24 }) {
  const Component = icons[name] || Zap
  return <Component size={size} strokeWidth={2.2} className={className} aria-hidden="true" />
}
