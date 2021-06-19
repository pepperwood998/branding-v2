import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import "./snap-slider.component.scss";
import { ReactComponent as ArrowUpIcon } from "@/app/assets/svgs/arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "@/app/assets/svgs/arrow-down.svg";
import classNames from "classnames";

const SnapSlider: React.FC<PropType> = ({
  activeIndex = 0,
  data = [],
  preview,
  content,
}) => {
  const snapboxRef = useRef(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [previewElems, setPreviewElems] =
    useState<JSX.Element[] | null | undefined>();

  const handleSelectItem = useCallback(
    (index: number) => {
      let validIndex = index;
      if (index < 0) {
        validIndex = 0;
      } else if (index > data.length - 1) {
        validIndex = data.length - 1;
      }
      setCurrent(validIndex);
    },
    [setCurrent, data.length],
  );

  useLayoutEffect(() => {
    setCurrent(activeIndex);
  }, [activeIndex]);

  useLayoutEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, data.length);

    const previews = data.map((item, index) => {
      return (
        <li
          key={index}
          className="pw-slider-item"
          ref={(elem) => (itemRefs.current[index] = elem)}
          onClick={() => handleSelectItem(index)}
        >
          <div
            className={classNames({
              "pw-slider-item-inner": true,
              "active": index === current,
            })}
          >
            {preview(item, index)}
          </div>
        </li>
      );
    });
    setPreviewElems(previews);
  }, [data, preview, handleSelectItem, current]);

  useLayoutEffect(() => {
    const snapbox = snapboxRef.current as unknown as HTMLElement;
    const snapTop = snapbox.offsetTop;
    const snapHeight = snapbox.offsetHeight;
    const currentItem = itemRefs.current[current] as HTMLElement;
    const currentTop = currentItem?.offsetTop;
    const currentHeight = currentItem?.offsetHeight;
    const offset = (currentHeight - snapHeight) / 2;
    itemRefs.current.forEach((item) => {
      const htmlItem = item as HTMLElement;
      htmlItem.style.transform = `translateY(${
        snapTop - currentTop - offset
      }px)`;
    });
  }, [previewElems, current]);

  return (
    <div className="pw-snap-slider">
      <div className="pw-slider">
        <button
          className={classNames({
            "pw-slider-nav pw-slider-nav-prev": true,
            "disabled": current === 0,
          })}
          onClick={() => handleSelectItem(current - 1)}
        >
          <ArrowUpIcon className="icon" />
        </button>
        <div className="pw-slider-snapbox" ref={snapboxRef}></div>
        <button
          className={classNames({
            "pw-slider-nav pw-slider-nav-next": true,
            "disabled": current === data.length - 1,
          })}
          onClick={() => handleSelectItem(current + 1)}
        >
          <ArrowDownIcon className="icon" />
        </button>
        <ul className="pw-slider-inner">{previewElems}</ul>
      </div>
      <div className="pw-content">{content(data[current], current)}</div>
    </div>
  );
};

type PropType = {
  activeIndex?: number;
  data?: any[];
  preview: (item: any, index: number) => React.ReactNode;
  content: (item: any, index: number) => React.ReactNode;
};

export default SnapSlider;
