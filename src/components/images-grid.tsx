import mirrorSelfie from "../assets/mirror-selfie.jpg";
import afterWorkoutSelfie from "../assets/after-workout-selfie.jpg";
import { Skeleton } from "./ui/skeleton";

export default function ImagesGrid() {
  return (
    <div className="columns-3 gap-4 space-y-4">
      <Skeleton
        className={`min-h-[170px] h-[170px] w-full rounded-xl flex justify-center items-center text-zinc-400`}
      >
        Empty for Now
      </Skeleton>
      <img
        className="rounded-md object-cover h-full w-full"
        src={mirrorSelfie}
      />
      <img
        className="rounded-md object-cover h-full w-full"
        src={afterWorkoutSelfie}
      />
      <Skeleton
        className={`min-h-[170px] h-[170px] w-full rounded-xl flex justify-center items-center text-zinc-400`}
      >
        Empty for Now
      </Skeleton>
      <Skeleton
        className={`min-h-[170px] h-[170px] w-full rounded-xl flex justify-center items-center text-zinc-400`}
      >
        Empty for Now
      </Skeleton>
      <Skeleton
        className={`min-h-[170px] h-[295px] w-full rounded-xl flex justify-center items-center text-zinc-400`}
      >
        Empty for Now
      </Skeleton>
    </div>
  );
}
