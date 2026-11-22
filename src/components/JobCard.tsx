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

interface JobCardProps {
  job: Job;
  selected: boolean;
  onClick: () => void;
}

export default function JobCard({ job, selected, onClick }: JobCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
        selected
          ? "border-primary bg-blue-50 shadow-md"
          : "border-transparent bg-white hover:border-gray-200"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-lg ${logoColors[job.logo] || "bg-gray-500"} flex items-center justify-center text-white font-bold text-sm shrink-0`}
        >
          {job.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground text-sm truncate">
                {job.title}
              </h3>
              <p className="text-muted text-xs mt-0.5">{job.company}</p>
            </div>
            <span className="text-primary font-bold text-sm whitespace-nowrap">
              {formatSalary(job.salary)}/mo
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <svg
                className="w-3 h-3"
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-muted font-medium">
              {job.type}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
