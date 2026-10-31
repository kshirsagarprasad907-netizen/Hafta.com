
type DashMetricsProps = {
  title: string;
  value: string | number;
  description: string;
};

export default function DashMetrics({
  title,
  value,
  description,
}: DashMetricsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <h3 className="mt-5 text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}