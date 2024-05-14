import prisma from '../src/lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.$executeRawUnsafe(`TRUNCATE TABLE music CASCADE;`),
    prisma.music.createMany({
      data: [
        {
          title: 'Knock You Out !',
          furigana: "Knock You Out !",
          artist:"私立恵比寿中学",
          composer:"KennyDoes(梅田サイファー)"
        },
        {
            title: 'Summer Glitter',
            furigana: "Summer Glitter",
            artist:"私立恵比寿中学",
            composer:"宇野水木/Rico Sato/Hiddie/Rose Blueming/奈良ひより/Ryo Ito"
        },
      ],
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
