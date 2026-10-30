export const memberships = [
  {
    id: 'basic', name: 'Basic', price: 29, recommended: false,
    description: 'Everything you need to start training with confidence.',
    features: ['Unlimited gym access', 'Locker & towel service', 'Open-floor training', 'Mobile progress tracking'],
  },
  {
    id: 'pro', name: 'Pro', price: 59, recommended: true,
    description: 'Coaching and classes to keep you progressing every week.',
    features: ['Everything in Basic', '2 group classes per week', 'Monthly body assessment', '1 personal training session', 'Priority class booking'],
  },
  {
    id: 'elite', name: 'Elite', price: 99, recommended: false,
    description: 'Premium coaching, recovery and perks for serious athletes.',
    features: ['Everything in Pro', 'Unlimited group classes', '4 personal training sessions', 'Recovery zone & sauna', 'Custom nutrition plan'],
  },
]

// true / false render a check / dash, strings render as text
export const comparisonRows = [
  ['Unlimited gym access', true, true, true],
  ['Group classes', '—', '2 / week', 'Unlimited'],
  ['Personal training sessions', false, '1 / month', '4 / month'],
  ['Monthly body assessment', false, true, true],
  ['Recovery zone & sauna', false, false, true],
  ['Custom nutrition plan', false, false, true],
  ['Guest passes', '—', '1 / month', '4 / month'],
]

export const membershipFaqs = [
  { q: 'Can I freeze or cancel my membership?', a: 'Yes. Freeze for up to 3 months or cancel anytime with 30 days’ notice — no hidden fees.' },
  { q: 'Is there a joining fee?', a: 'No. All plans have zero joining fees and include a 7-day free trial.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. Upgrade or downgrade at any time and the change applies from your next billing date.' },
  { q: 'Do you offer student or corporate rates?', a: 'Yes — contact us and we will set up a discounted plan for students and teams.' },
]

export const YEARLY_DISCOUNT = 0.2
