import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import JobPostingCard from './job-posting-card';

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`
  );

  if (!res.ok) return undefined;

  const payload = await res.json();

  return payload.data;
}

async function fetchComments(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}/comments`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

type Comment = {
  id: string;
  author: string;
  content: string;
};

async function Vaga({ params }: { params: Promise<{ id: string }> }) {
  const jobId = (await params).id;
  const job = await fetchJob(jobId);
  const comments = await fetchComments(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <JobPostingCard job={job} />
      <div className="mt-8">
        <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
        <div className="space-y-4">
          {comments.map((comment: Comment) => (
            <div
              key={comment.id}
              className="max-w-lg rounded-lg border-l-4 border-l-blue-400 bg-gray-50 p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-2 flex items-center gap-3">
                <p className="font-semibold text-gray-800">{comment.author}</p>
              </div>
              <p className="leading-relaxed text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vaga;
