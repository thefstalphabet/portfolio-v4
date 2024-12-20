import mirrorSelfie from "../assets/mirror-selfie.jpg";
import workoutSelfie from "../assets/workout-selfie.jpg";
import { Skeleton } from "./ui/skeleton";

export default function ImagesGrid() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 grid-rows-4 sm:grid-rows-3 h-[668px] sm:h-[800px] gap-2 slide-in-delay w-ful">
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
      <div className="w-full h-full flex-center bento-item row-span-1 flex-center sm:row-span-2">
        <img src={mirrorSelfie} className="rounded-md object-cover h-full w-full" />
      </div>
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
      <div className="w-full h-full flex-center bento-item row-span-2 flex-center">
        <img src={workoutSelfie} className="rounded-md object-cover h-full w-full" />
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
