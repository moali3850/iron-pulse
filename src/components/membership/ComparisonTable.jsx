import DataTable from "../common/DataTable"
import { comparisonRows } from "../../data/memberships"

export default function ComparisonTable() {
  const columns = [{ label: "Feature" }, { label: "Basic" }, { label: "Pro", highlight: true }, { label: "Elite" }]
  return <DataTable caption="Membership plan comparison" columns={columns} rows={comparisonRows} />
}
