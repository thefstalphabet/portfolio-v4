import mirrorSelfie from "../assets/mirror-selfie.jpg";
import afterWorkoutSelfie from "../assets/after-workout-selfie.jpg";
import { Skeleton } from "./ui/skeleton";

export default function ImagesGrid() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 grid-rows-4 sm:grid-rows-3 h-[668px] sm:h-[800px] gap-4 slide-in-delay w-ful">
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
      <div className="w-full h-full flex-center bento-item row-span-1 flex-center sm:row-span-2">
        <img src={mirrorSelfie} className="object-cover h-full w-full" />
      </div>
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
      <div className="w-full h-full flex-center bento-item row-span-2 flex-center">
        <img src={afterWorkoutSelfie} className="object-cover h-full w-full" />
      </div>
      <Skeleton className="flex justify-center items-center bento-item row-span-2 animate-pulse flex-center">
        Empty for Now
      </Skeleton>
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
    </div>
  );
}
