import {isMobile} from "react-device-detect";
import {clsx} from "clsx";
import Skeleton from "@/components/Skeleton";
import classesM from "../../styles.mobile.module.scss";
import classesD from "../../styles.desktop.module.scss";



interface MovieSectionTitleSkeletonProps {
  className?: string,
  width: string | number
}

function MovieSectionTitleSkeleton({className, width}: MovieSectionTitleSkeletonProps) {
  return (
    <h3 className={clsx(isMobile ? classesM.movieSectionTitle : classesD.movieSectionTitle, className)}>
      <Skeleton variant="text" width={width}/>
    </h3>
  );
}

export default MovieSectionTitleSkeleton;