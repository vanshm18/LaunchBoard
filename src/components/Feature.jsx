const Feature = ({image, heading, desc}) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-8">
      <div className="aspect-square w-10 text-blue-500 p-2 bg-blue-100 rounded-lg">
        {image}
      </div>

      <h1 className="font-bold text-sm sm:text-base">{heading}</h1>

      <p className="text-xs sm:text-sm text-gray-500 font-medium">{desc}</p>
    </div>
  )
}

export default Feature
