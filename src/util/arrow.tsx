"use client";

import { Icon } from "@iconify/react";

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SampleNextArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <Icon icon="lucide:move-right" />
    </button>
  );
};

export const SamplePrevArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <Icon icon="lucide:move-left" />
    </button>
  );
};
