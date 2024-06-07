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
      <section className="flex h-[30vh] w-full items-end justify-end bg-[url(/background.png)] bg-[length:110%] bg-right bg-no-repeat md:h-2/3">
        <h3 className="text-6xl text-white">白頭翁</h3>
      </section>
      {/* section 2 */}
      <section className="flex h-1/3 w-full flex-col items-center bg-orange-300 md:flex-row">
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
