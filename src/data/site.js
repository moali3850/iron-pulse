import { images } from './images'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

export const footerColumns = [
  { title: 'Explore', links: [{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Programs', to: '/programs' }, { label: 'Trainers', to: '/trainers' }] },
  { title: 'Join', links: [{ label: 'Membership Plans', to: '/membership' }, { label: 'Contact Us', to: '/contact' }, { label: 'FAQ', to: '/membership#faq' }, { label: 'Free Trial', to: '/contact?subject=Free%20trial' }] },
]

export const contactInfo = {
  address: '24 Power Street, Cairo, Egypt',
  phone: '+20 100 000 0000',
  email: 'hello@ironpulse.fit',
  hours: [
    ['Monday – Friday', '5:00 AM – 12:00 AM'],
    ['Saturday', '6:00 AM – 11:00 PM'],
    ['Sunday', '7:00 AM – 10:00 PM'],
  ],
}

// Social links are placeholders (no real accounts yet) — replace the URLs.
export const socialLinks = [
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'YouTube', short: 'YT', href: '#' },
  { label: 'X', short: 'X', href: '#' },
  { label: 'Facebook', short: 'FB', href: '#' },
]

export const heroStats = [
  { value: '12K+', label: 'Active members' },
  { value: '40+', label: 'Certified coaches' },
  { value: '150', label: 'Weekly classes' },
]

export const introChecks = ['Over 3,000 m² of training space', 'Coach-led programs for every level', 'Open 5 AM – midnight, 7 days a week']

export const benefits = [
  { title: 'Expert Coaching', text: 'Certified trainers design every plan around your goals, schedule and level.', icon: 'zap' },
  { title: 'Elite Equipment', text: 'Competition-grade racks, plates and cardio machines, maintained daily.', icon: 'dumbbell' },
  { title: 'Flexible Hours', text: 'Train from 5 AM to midnight, every day of the week, on your schedule.', icon: 'clock' },
  { title: 'Proven Results', text: 'Track progress with monthly assessments and a community that celebrates wins.', icon: 'trophy' },
]

export const aboutStats = [
  { value: '12K+', label: 'Active members' },
  { value: '40+', label: 'Certified coaches' },
  { value: '10', label: 'Years of experience' },
  { value: '98%', label: 'Member satisfaction' },
]

export const achievements = ['Best Gym 2025 · City Fitness Awards', '3,500+ member transformations', 'Certified coaches · NASM & ACE']

export const facilities = [
  { title: 'Strength Floor', text: 'Olympic racks, platforms and 200+ plates.', image: images.strength },
  { title: 'Cardio Zone', text: 'Treadmills, rowers and bikes with live metrics.', image: images.cardio },
  { title: 'Functional Studio', text: 'Sleds, ropes, kettlebells and open turf.', image: images.functional },
]

export const equipmentTags = ['Olympic racks', 'Dumbbells 2–60 kg', 'Kettlebells', 'Rowing machines', 'Sleds & ropes', 'Recovery zone']

export const values = [
  { title: 'Discipline', text: 'Consistency beats intensity. We build habits that last.', icon: 'target' },
  { title: 'Community', text: 'Everyone belongs here, from first-timers to athletes.', icon: 'users' },
  { title: 'Progress', text: 'We measure what matters and celebrate every win.', icon: 'trophy' },
  { title: 'Respect', text: 'For your goals, your body and your pace.', icon: 'heart' },
]

export const philosophy = [
  { n: '01', title: 'Assess', text: 'We start with your goals, history and a movement screen.' },
  { n: '02', title: 'Plan', text: 'Your coach builds a progressive plan that fits your week.' },
  { n: '03', title: 'Progress', text: 'Monthly check-ins keep you accountable and moving forward.' },
]
