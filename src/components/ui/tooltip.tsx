import type { Ref } from 'react';
import { forwardRef, memo } from 'react';
import { Tooltip as AntTooltip, type TooltipProps } from 'antd';
import type { TooltipRef } from 'antd/es/tooltip';

export const Tooltip = memo(
  forwardRef((props: TooltipProps, ref: Ref<TooltipRef>) => {
    const tooltipProps: TooltipProps = {
      destroyTooltipOnHide: true,
      ...props,
    };
    return <AntTooltip ref={ref} {...tooltipProps} />;
  })
);
