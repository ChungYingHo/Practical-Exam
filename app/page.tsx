import IntroArea from "./components/introArea"

const introList = [
  {
    title: "外觀",
    description: "This is the first intro area."
  },
  {
    title: "棲地",
    description: "This is the second intro area."
  },
  {
    title: "食性",
    description: "This is the third intro area."
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:w-3/4">
      {/* section 1 */}
      <section className="h-[30vh] md:h-2/3 w-full bg-[url(/background.png)] bg-cover bg-no-repeat">
        <h3 className="text-white">白頭翁</h3>
      </section>
      {/* section 2 */}
      <section className="h-1/3 w-full bg-orange-300">
        {introList.map((intro, index) => (
          <IntroArea
            key={index}
            title={intro.title}
            description={intro.description}
          />
        ))}
      </section>
    </main>
  )
}
