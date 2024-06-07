const IntroArea = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex w-full items-start justify-center gap-5 px-5 md:w-1/3">
      {/* left section */}
      <div className="relative border border-teal-500">
        <p className="border border-green-600 text-2xl tracking-[1.5rem] [writing-mode:vertical-lr]">
          {title}
        </p>
        {/* circle decoration */}
        <div className="absolute bottom-[1rem] right-[-0.5rem] h-4 w-4 rounded-full border-[0.2rem] border-orange-700 bg-transparent"></div>
      </div>
      {/* right section */}
      <div className="w-[80%] border border-violet-300">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default IntroArea
