import { Flex, Tooltip } from 'antd';
import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { To } from 'react-router-dom';
import type { ReactNode } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/utils';

interface Props {
  title?: string;
  children?: ReactNode;
  extraRight?: ReactNode;
  showBack?: boolean | { enabled: boolean; link: string; tootipTitle?: string };
  stickyHeader?: boolean;
}

const Container = (props: Props) => {
  const navigate = useNavigate();
  const { title, children, extraRight, showBack = false, stickyHeader = false } = props;

  const onBack = () => {
    const backLink: To = typeof showBack === 'boolean' ? (-1 as To) : showBack?.link;
    navigate(backLink);
  };

  const showContainerHeader = Boolean(title) || Boolean(extraRight);
  const showBackButton = typeof showBack === 'boolean' ? showBack : showBack?.enabled;
  const tooltipTitle = typeof showBack === 'boolean' ? 'Trở về' : showBack?.tootipTitle;

  return (
    <div className="relative h-full overflow-auto">
      {showContainerHeader && (
        <Flex
          align="center"
          justify="space-between"
          className={cn('w-full bg-white px-4 py-2', { 'sticky top-0 z-10': stickyHeader })}
          gap="small"
        >
          <Flex gap="small">
            {showBackButton && (
              <Tooltip destroyTooltipOnHide title={tooltipTitle ?? 'Trở về'}>
                <Button type="text" icon={<Undo2 />} onClick={onBack} />
              </Tooltip>
            )}
            <h1 className="m-0 text-2xl font-medium text-gray-800">{title}</h1>
          </Flex>
          <div className="max-w-max">{extraRight}</div>
        </Flex>
      )}
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default Container;
