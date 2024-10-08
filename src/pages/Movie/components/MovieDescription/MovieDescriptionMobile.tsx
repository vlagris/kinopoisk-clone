import {useState, useRef, useLayoutEffect} from "react";
import {clsx} from "clsx";
import {MovieDescriptionProps} from "@/pages/Movie/components/MovieDescription/MovieDescription.tsx";
import classes from "./styles.mobile.module.scss";



function MovieDescriptionMobile({description, shortDescription}: MovieDescriptionProps) {
  const [show, setShow] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const ParagraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ParagraphRef.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ParagraphRef]);

  const handleToggle = () => setShow(!show);


  return (
    <div className={classes.description}>
      {!!shortDescription &&
        <p className={classes.shortDescription}>{shortDescription}</p>
      }

      <p
        ref={ParagraphRef}
        className={clsx(classes.paragraph, !show && classes.paragraphTruncated)}
      >
        {description}
      </p>

        {isTruncated &&
        <button className={classes.button} onClick={handleToggle}>
          {show ? "Полное описание" : "Свернуть"}
        </button>
      }
    </div>
  );
}

export default MovieDescriptionMobile;