import JobItem, { Job } from '@/components/cards/job-item';

async function fetchJobs() {
  const res = await fetch('https://apis.codante.io/api/job-board/jobs');

  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  return res.json();
}

export default async function Vagas() {
  const result = await fetchJobs();

  const jobs: Job[] = result.data;

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobItem job={job} key={job.id} />
        ))}
      </div>
    </main>
  );
}
