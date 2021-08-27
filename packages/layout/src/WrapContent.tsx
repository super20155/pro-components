import type { CSSProperties } from 'react';
import React from 'react';
import { Layout } from 'antd';
import { ConfigProviderWrap } from '@ant-design/pro-provider';
import { ErrorBoundary } from '@ant-design/pro-utils';

const WrapContent: React.FC<{
  isChildrenLayout?: boolean;
  className?: string;
  style?: CSSProperties;
  location?: any;
  contentHeight?: number | string;
}> = (props) => {
  const { style, className, children } = props;
  return (
    <ConfigProviderWrap>
      <ErrorBoundary>
        <Layout.Content className={className} style={style}>
          {children}
        </Layout.Content>
      </ErrorBoundary>
    </ConfigProviderWrap>
  );
};

export default WrapContent;
