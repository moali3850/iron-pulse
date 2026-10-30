import { YEARLY_DISCOUNT } from "../data/memberships"

// Monthly price shown for a plan, depending on the billing period.
export function getMonthlyPrice(price, billing) {
  return billing === "yearly" ? Math.round(price * (1 - YEARLY_DISCOUNT)) : price
}
