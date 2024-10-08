import React from "react";
import {clsx} from "clsx";
import classes from "../../styles.module.scss";


export type AboutMovieItemValue = {
  value: string | number | null | undefined,
  to?: string
}

interface AboutMovieItemProps {
  title: string,
  values?: AboutMovieItemValue[],
  children?: React.ReactNode,
  required?: boolean,
  limited?: boolean
}

const requiredValue = {value: "—"};

function AboutMovieRow({ title, values, children, required, limited }: AboutMovieItemProps) {
  const valuesCleared = values?.filter(item => !!item.value) || [];
  const finalValues = limited ? valuesCleared.slice(0, 3) : valuesCleared;


  if (required && valuesCleared?.length === 0) {
    valuesCleared.push(requiredValue);
  }


  if(!(valuesCleared && valuesCleared.length || children)) {
    return (<></>)
  }


  return (
    <div className={classes.row}>
      <span className={classes.rowTitle}>{title}</span>
      <div className={classes.rowValues}>

        {children ?
          <span className={classes.rowValue}>
            {children}
          </span>
          :
          <>
            {finalValues.map((item, index) =>
              <React.Fragment key={index}>
                {index > 0 && ", "}
                <span className={clsx((item.to || true) && classes.rowValue)}>
                  {item.value}
                </span>
              </React.Fragment>
            )}
            {(valuesCleared.length > 3 && limited) &&
              <>
                {", "}
                <span className={classes.rowValue}>
                  ...
                </span>
              </>
            }
          </>
        }

      </div>
    </div>
  );
}

export default AboutMovieRow;