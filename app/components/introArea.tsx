const IntroArea = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="mx-9 flex w-full items-start justify-center gap-7 px-5 lg:mx-0 lg:w-fit lg:gap-10">
      {/* left section */}
      <div className="relative">
        <p className="text-4xl font-bold [writing-mode:vertical-lr]">{title}</p>
        {/* circle decoration */}
        <div className="border-opacity-orange absolute bottom-[-0.75rem] right-[-0.75rem] h-6 w-6 rounded-full border-8 bg-transparent"></div>
      </div>
      {/* right section */}
      <div className="w-[80%] font-normal lg:w-[200px]">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default IntroArea
