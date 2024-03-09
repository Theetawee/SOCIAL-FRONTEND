import VerifiedSvg from "./VerifiedSvg"

const Name = ({name,verified=false,size="base",}:{name:string,verified?:boolean,size?:"lg"|"sm"|"base"|"xl"|"2xl"}) => {
  return (
    <div className="flex items-center">
          <h3 className={`text-${size} font-medium text-gray-900 dark:text-white truncate max-w-40`}>{name}</h3>
      {verified && <VerifiedSvg />}
    </div>
  );
}

export default Name