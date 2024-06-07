const IntroArea = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex">
      <div className="relative">
        <p className="[writing-mode:vertical-lr] text-2xl tracking-[1.5rem] border border-green-600">
          {title}
        </p>
        {/* circle decoration */}
        <div className="absolute w-4 h-4 bg-transparent rounded-full border-[0.2rem] border-orange-700 bottom-[1rem] right-[-0.5rem]"></div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default IntroArea
