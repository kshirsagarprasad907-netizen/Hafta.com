
type recentEntryProps = {
  date: string;
  area: string;
  amount: number;
  enterprise: string;
  officer: string;
};

export default function RecentEntriesList({
  date,
  area,
  amount,
  enterprise,
  officer,
}: recentEntryProps) {
  return (
  <tr className="border-b text-slate-600 text-sm hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{area}</td>
      <td className="px-6 py-4">
        ₹{amount.toLocaleString("en-IN")}
      </td>
      <td className="px-6 py-4">{enterprise}</td>
      <td className="px-6 py-4">{officer}</td>
    </tr>
);
}