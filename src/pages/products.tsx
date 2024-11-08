import { Skeleton } from "../components/ui/skeleton";
import getHired from "../assets/products/get-hired.jpg";
import tiffinBox from "../assets/products/tiffin-box.jpg";
import portfolio from "../assets/products/portfolio.jpg";
import ProductCard from "../components/ui/product-card";

export default function Products() {
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-3 grid-rows-4 sm:grid-rows-3 h-[668px] sm:h-[800px] gap-4 slide-in-delay w-ful">
      <ProductCard
        view="col"
        size={2}
        image={getHired}
        githubUrl="https://github.com/thefstalphabet/get-hired"
        hostUrl="https://get-hired-mu.vercel.app/"
      />
      <ProductCard
        view="col"
        size={1}
        image={portfolio}
        githubUrl="https://github.com/thefstalphabet/portfolio-v4"
        hostUrl="https://akash-patel-portfolio.netlify.app/"
      />
      <Skeleton className="flex justify-center items-center">
        Empty for Now
      </Skeleton>
      <ProductCard
        view="col"
        size={2}
        image={tiffinBox}
        githubUrl="https://github.com/thefstalphabet/tiffin-box-ui"
        hostUrl="https://tiffin-box.netlify.app/"
      />
      <Skeleton className="flex justify-center items-center bento-item col-span-2 animate-pulse flex-center">
        Empty for Now
      </Skeleton>
      <Skeleton className="flex justify-center items-center ">
        Empty for Now
      </Skeleton>
    </div>
  );
}
