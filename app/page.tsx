import IntroArea from "./components/introArea"

const titleList = {
  chName: "白頭翁",
  enName: "(Chinese bulbul)",
  intro:
    "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。"
}

const introList = [
  {
    title: "外觀",
    description:
      "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。"
  },
  {
    title: "棲地",
    description:
      "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。"
  },
  {
    title: "食性",
    description:
      "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。"
  }
]

export default function Home() {
  return (
    <main className="flex flex-col 2xl:min-h-screen 2xl:w-3/4">
      {/* section 1 */}
      <section className="relative flex h-[311px] w-full flex-col items-center justify-end bg-[url(/background.png)] bg-cover bg-no-repeat 2xl:h-2/3 2xl:items-end 2xl:pb-5 2xl:pr-20">
        {/* black mask */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]"></div>
        <div className="w-[87%] 2xl:flex 2xl:justify-end 2xl:gap-2">
          <h3 className="text-right text-5xl font-bold text-white 2xl:text-6xl">
            {titleList.chName}
          </h3>
          <h3 className="text-right text-5xl font-bold text-white 2xl:text-6xl">
            {titleList.enName}
          </h3>
        </div>

        <p className="my-3 w-[87%] text-right text-lg text-white 2xl:text-xl">
          {titleList.intro}
        </p>
      </section>
      {/* section 2 */}
      <section className="flex min-h-fit w-full flex-col items-center gap-[50px] bg-[#dcccbc] py-[50px] 2xl:h-1/3 2xl:min-h-0 2xl:flex-row 2xl:items-start 2xl:justify-around 2xl:py-[60px]">
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
