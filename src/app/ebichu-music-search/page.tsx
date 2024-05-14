"use client"
import { useEffect } from "react";
import prisma from '@/lib/prisma';
export default function Page() {
    const fetchData =async () => {
        const musics = await prisma.music.findMany({orderBy:{id:'asc'}})
        console.log(musics)
    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        // <section>
        //     {children}
        // </section>
        <>
        <p>aaaa</p>
        <p>iii</p>
        </>
    );
}