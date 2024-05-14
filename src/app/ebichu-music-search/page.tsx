
import prisma from '@/lib/prisma';
export default async function Page() {
    const musics = await prisma.music.findMany({ orderBy: { id: 'asc' } })
    console.log(musics)


    return (
        <main>
            <div>
                {musics.map((item) => {
                    return (
                        <div>
                            {item.title}
                        </div>
                    )
                })}
            </div>
        </main>
    );
}