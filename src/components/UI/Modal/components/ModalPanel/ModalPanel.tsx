import React from 'react';
import {clsx} from "clsx";
import classes from "../../styles.module.scss";


interface ModalPanelProps {
  children?: React.ReactNode,
  variant?: "bottom" | "center"
}

function ModalPanel({children, variant = "center"}: ModalPanelProps) {
  return (
    <div className={clsx(classes.panelContainer, classes[`panelContainer_${variant}`])}>
      <div className={clsx(classes.panel, classes[`panel_${variant}`])}>
        {children}
      </div>
    </div>
  );
}

export default ModalPanel;