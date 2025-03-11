import { notFound } from 'next/navigation';
import React from 'react';

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`
  );

  if (!res.ok) return undefined;

  const payload = await res.json();

  return payload.data;
}

const Vaga = async ({ params }: { params: Promise<{ id: string }> }) => {
  const jobId = (await params).id;
  const job = await fetchJob(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div>
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  );
};

export default Vaga;
