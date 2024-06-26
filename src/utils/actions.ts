'use server';

import prisma from './db';
import { auth } from '@clerk/nextjs/server';
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from './types';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs'

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) {
        redirect('/');
    }
    return userId;
}

export async function createJobAction(values: CreateAndEditJobType): Promise<JobType | null> {
    const userId = authenticateAndRedirect();

    try {
        // Validate the form values, if validation fails, return error which will go to the catch block
        createAndEditJobSchema.parse(values);

        const job: JobType = await prisma.job.create({
            data: {
                ...values,
                clerkId: userId,
            }
        })
        return job;
    } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
                console.log('Unique constraint failed');
                return null;
            }
        }
        console.log(err);
        return null;
    }
}
