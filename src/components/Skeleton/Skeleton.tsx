import {clsx} from "clsx";
import classes from "@/components/Skeleton/styles.module.scss";


interface SkeletonProps {
  width?: number | string,
  height?: number | string,
  variant?: "rect" | "circle" | "text",
  count?: number,
}

function Skeleton({variant = "rect", width, height}: SkeletonProps) {
  // const line = Array(count).fill("");
  return (
    <span className={clsx(classes.skeletonRoot)} style={{width}}>
      <span
        className={clsx(classes.skeleton, classes[`skeleton_${variant}`])}
        style={{width, height}}
      >
        &zwnj;
      </span>
    </span>
  );
}

export default Skeleton;