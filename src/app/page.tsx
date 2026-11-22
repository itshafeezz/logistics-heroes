"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import JobDetail from "@/components/JobDetail";
import ApplicationForm from "@/components/ApplicationForm";
import { jobs, getCategories, formatSalary } from "@/lib/jobs";

type View = "list" | "detail" | "apply";

export default function Home() {
  const [selectedJobId, setSelectedJobId] = useState<string>(jobs[0].id);
  const [mobileView, setMobileView] = useState<View>("list");
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => ["All", ...getCategories()], []);
  const selectedJob = useMemo(
    () => jobs.find((j) => j.id === selectedJobId) || jobs[0],
    [selectedJobId]
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectJob = (id: string) => {
    setSelectedJobId(id);
    setShowForm(false);
    setMobileView("detail");
  };

  const handleApply = () => {
    setShowForm(true);
    setMobileView("apply");
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setMobileView("list");
  };

  const handleBackToList = () => {
    setMobileView("list");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary-dark to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Find Your Next
            <br />
            <span className="text-amber-400">Logistics Job</span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-lg mb-8">
            Discover thousands of delivery, warehouse, fleet, and supply chain
            opportunities across India.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl">
            <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search jobs, companies, cities..."
                className="w-full text-sm text-foreground placeholder-gray-400 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-accent hover:bg-amber-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap">
              Search Jobs
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div>
              <span className="font-bold text-2xl text-white">500+</span>
              <p className="text-blue-200 text-xs mt-0.5">Active Jobs</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-white">150+</span>
              <p className="text-blue-200 text-xs mt-0.5">Companies</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-white">10K+</span>
              <p className="text-blue-200 text-xs mt-0.5">Hired This Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-5">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-blue-200"
                  : "bg-white text-muted hover:bg-gray-50 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">
              {filteredJobs.length}
            </span>{" "}
            jobs found
          </p>
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 h-[calc(100vh-420px)] min-h-[500px]">
          {/* Job List */}
          <div className="col-span-4 overflow-y-auto pr-2 space-y-2">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                selected={job.id === selectedJobId}
                onClick={() => handleSelectJob(job.id)}
              />
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 text-muted text-sm">
                No jobs found matching your criteria.
              </div>
            )}
          </div>

          {/* Job Detail */}
          <div className="col-span-4 overflow-hidden">
            <JobDetail
              key={selectedJob.id}
              job={selectedJob}
              onApply={handleApply}
            />
          </div>

          {/* Application Form / Placeholder */}
          <div className="col-span-4 overflow-hidden">
            {showForm ? (
              <ApplicationForm
                key={selectedJob.id}
                job={selectedJob}
                onClose={handleCloseForm}
              />
            ) : (
              <div className="bg-white rounded-2xl border border-border p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-muted max-w-xs">
                  Select a job and click &quot;Apply Now&quot; to fill out the
                  application form.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet: Single view */}
        <div className="lg:hidden">
          {mobileView === "list" && (
            <div className="space-y-2 animate-fade-in">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  selected={false}
                  onClick={() => handleSelectJob(job.id)}
                />
              ))}
              {filteredJobs.length === 0 && (
                <div className="text-center py-12 text-muted text-sm">
                  No jobs found matching your criteria.
                </div>
              )}
            </div>
          )}

          {mobileView === "detail" && (
            <div className="animate-slide-in">
              <JobDetail
                key={selectedJob.id}
                job={selectedJob}
                onApply={handleApply}
                onBack={handleBackToList}
              />
            </div>
          )}

          {mobileView === "apply" && (
            <div className="animate-fade-in">
              <ApplicationForm
                key={selectedJob.id}
                job={selectedJob}
                onClose={handleCloseForm}
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <span className="font-bold text-foreground">
                  Logistics<span className="text-primary">Heroes</span>
                </span>
              </div>
              <p className="text-xs text-muted">
                India&apos;s leading logistics job platform connecting talent
                with opportunity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                For Job Seekers
              </h4>
              <ul className="space-y-2 text-xs text-muted">
                <li>Browse Jobs</li>
                <li>Career Advice</li>
                <li>Salary Guide</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                For Employers
              </h4>
              <ul className="space-y-2 text-xs text-muted">
                <li>Post a Job</li>
                <li>Pricing</li>
                <li>Employer Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-muted">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 pt-6 text-center text-xs text-muted">
            &copy; 2026 LogisticsHeroes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
