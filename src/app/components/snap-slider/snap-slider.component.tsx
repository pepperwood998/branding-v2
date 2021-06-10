import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./snap-slider.component.scss";

const SnapSlider: React.FC<PropType> = ({
  children,
  activeIndex = 0,
  onChangeIndex = () => undefined,
}) => {
  const snapboxRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [finalChildren, setFinalChildren] = useState<
    JSX.Element[] | null | undefined
  >();

  const handleSelectItem = useCallback(
    (index: number) => {
      setCurrent(index);
      onChangeIndex(index);
    },
    [setCurrent, onChangeIndex],
  );

  useLayoutEffect(() => {
    setCurrent(activeIndex);
  }, [activeIndex]);

  useLayoutEffect(() => {
    itemRefs.current = itemRefs.current.slice(
      0,
      React.Children.toArray(children).length,
    );

    const finalChildren = React.Children.map(children, (child, index) => {
      return (
        <div
          className="pw-slider-item"
          ref={(elem) => (itemRefs.current[index] = elem)}
          onClick={() => handleSelectItem(index)}
        >
          {child}
        </div>
      );
    });
    setFinalChildren(finalChildren);
  }, [children, handleSelectItem]);

  useEffect(() => {
    const snapbox = (snapboxRef.current as unknown) as HTMLElement;
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
  }, [finalChildren, current]);

  return (
    <div className="pw-snap-slider">
      <div className="pw-slider">
        <div className="pw-slider-snapbox" ref={snapboxRef}></div>
        <div className="pw-slider-inner">{finalChildren}</div>
      </div>
      <div className="pw-content"></div>
    </div>
  );
};

type PropType = {
  activeIndex?: number;
  onChangeIndex?: (activeIndex: number) => void;
};

export default SnapSlider;
