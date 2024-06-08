const IntroArea = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="mx-9 flex w-full items-start justify-between px-7 md:px-24 lg:px-60 xl:px-96 2xl:mx-0 2xl:w-fit 2xl:justify-center 2xl:gap-10 2xl:px-0">
      {/* left section */}
      <div className="relative">
        <p className="text-4xl font-bold [writing-mode:vertical-lr]">{title}</p>
        {/* circle decoration */}
        <div className="absolute bottom-[-0.75rem] left-[25px] h-6 w-6 rounded-full border-8 border-opacity-orange bg-transparent"></div>
      </div>
      {/* right section */}
      <div className="w-[75%] font-normal 2xl:w-[200px]">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default IntroArea
