'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteJob(formData: FormData) {
  const jobId = await formData.get('id');

  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`,
    {
      method: 'DELETE',
    }
  );

  if (!res.ok) {
    throw new Error(
      'nós detectamos um erro ao tentar deletar esta vaga, tente novamente em alguns segundos'
    );
  }

  revalidatePath('/vagas');
  redirect('/vagas');
}

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
