const Review = ({userName, userPhoto, designation, desc}) => {
  return (
    <div className="flex flex-col w-60 sm:w-72 bg-white h-auto p-4 shrink-0 rounded-lg">
      <div className="flex gap-2 h-1/4 sm:h-1/3">
        <img 
          src={userPhoto}
          className="aspect-square h-10 rounded-full object-cover object-top">
        </img>

        <div className="flex flex-col">
          <h3 className="font-semibold text-sm sm:text-base">{userName}</h3>
          <h4 className="text-gray-400 text-xs font-medium">{designation}</h4>
        </div>    
      </div>

      <div className="w-full sm:text-sm text-xs px-1 text-gray-700 my-2">"{desc}"</div>
    </div>
  )
}

export default Review
