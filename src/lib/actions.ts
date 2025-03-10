'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createJob(formData: FormData) {
  const res = await fetch('https://apis.codante.io/api/job-board/jobs', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to create job');
  }

  revalidatePath('/vagas');
  redirect('/vagas');
}
