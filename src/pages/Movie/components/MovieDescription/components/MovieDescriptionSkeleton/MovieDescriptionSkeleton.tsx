import {isMobile} from "react-device-detect";
import MovieDescriptionSkeletonDesktop
  from "@/pages/Movie/components/MovieDescription/components/MovieDescriptionSkeleton/MovieDescriptionSkeletonDesktop.tsx";
import MovieDescriptionSkeletonMobile
  from "@/pages/Movie/components/MovieDescription/components/MovieDescriptionSkeleton/MovieDescriptionSkeletonMobile.tsx";



function MovieDescriptionSkeleton() {
  return (
    <>
      {isMobile? (
        <MovieDescriptionSkeletonMobile/>
      ):(
        <MovieDescriptionSkeletonDesktop/>
      )}
    </>
  );
}

export default MovieDescriptionSkeleton;