import React from "react";
import classNames from "classnames";

/**
 * @deprecated
 */
const SnapSliderItem: React.FC<PropType> = ({ children = "" }) => {
  return <>{children}</>;
};
SnapSliderItem.displayName = "SnapSliderItem";

/**
 * @deprecated
 */
const ForwardedSnapSliderItem = React.forwardRef<
  HTMLDivElement,
  ForwardedSnapSliderItemPropType
>(({ render = "", onClick = () => undefined, className = "" }, ref) => {
  return (
    <div
      className={classNames("pw-slider-item", className)}
      ref={ref}
      onClick={onClick}
    >
      {render}
    </div>
  );
});
ForwardedSnapSliderItem.displayName = "ForwardedSnapSliderItem";

interface PropType {
  className?: string;
}

interface ForwardedSnapSliderItemPropType extends PropType {
  render?: React.ReactNode;
  onClick?: () => void;
}

export { SnapSliderItem, ForwardedSnapSliderItem };
