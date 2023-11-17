import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

interface PageProps {
    params: {
        fileid: string
    }
}

const page = async ({params}: PageProps) => {
    // retrieve file id
     const {fileid} = params;

    // Check if user is logged in
     const {getUser} = getKindeServerSession();
     const user = getUser();

     if(!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    // make database call
    const file = await db.file.findFirst({
        where: {
            id: fileid,
            userId: user.id
        }
    })

    if(!file) notFound();
    return (
    <div>
        {fileid}
    </div>
  )
}

export default page