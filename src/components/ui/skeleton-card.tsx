import { Skeleton } from "../../components/ui/skeleton";

export function SkeletonCard() {
  return (
    <Skeleton className="min-h-[170px] h-[170px] w-full rounded-xl flex justify-center items-center text-zinc-400">
      Empty for Now
    </Skeleton>
  );
}
