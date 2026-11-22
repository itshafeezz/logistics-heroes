"use client";

import { Job, formatSalary } from "@/lib/jobs";

const logoColors: Record<string, string> = {
  F: "bg-blue-600",
  D: "bg-red-500",
  B: "bg-blue-800",
  A: "bg-orange-500",
  R: "bg-green-600",
  S: "bg-purple-600",
  E: "bg-teal-600",
  X: "bg-indigo-600",
};

interface JobDetailProps {
  job: Job;
  onApply: () => void;
  onBack?: () => void;
}

export default function JobDetail({ job, onApply, onBack }: JobDetailProps) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 animate-fade-in h-full flex flex-col">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-muted hover:text-foreground mb-4 lg:hidden transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to jobs
        </button>
      )}

      <div className="flex items-start gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-xl ${logoColors[job.logo] || "bg-gray-500"} flex items-center justify-center text-white font-bold text-xl shrink-0`}
        >
          {job.logo}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground">{job.title}</h2>
          <p className="text-muted text-sm mt-1">{job.company}</p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Posted {job.posted}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted font-medium uppercase tracking-wide">
              Monthly Salary
            </p>
            <p className="text-2xl font-bold text-primary mt-1">
              {formatSalary(job.salary)}/mo
            </p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            {job.category}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Description</h3>
          <p className="text-sm text-muted leading-relaxed">
            {job.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Requirements</h3>
          <ul className="space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Benefits</h3>
          <div className="flex flex-wrap gap-2">
            {job.benefits.map((benefit, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium border border-amber-100"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button
          onClick={onApply}
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
