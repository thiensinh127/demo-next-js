import { FC, useEffect, useRef, useState } from 'react';
import { Pagination } from 'antd';
import { useRouter } from 'next/router';
import type { PaginationProps } from 'antd';

interface Props {
  total: number;
}
const PaginationImage: FC<Props> = ({ total }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);

  const router = useRouter();
  const didMount = useRef(true);

  const onChange: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
    current,
    pageSize
  ) => {
    setPageSize(pageSize);
  };

  useEffect(() => {
    const pushRouter = (renderQuery: any) => {
      return router.push({
        pathname: '/pexels',
        query: {
          ...router.query,
          ...renderQuery,
        },
      });
    };

    const queryCnt = {
      page,
      per_page: pageSize,
    };

    if (!didMount.current) {
      pushRouter(queryCnt);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);

  useEffect(() => {
    didMount.current = false;
  }, []);
  const pageSizeOptions = [40, 60, 80, 100];

  return (
    <div className="Pagination">
      <Pagination
        current={page}
        onChange={onChange}
        total={total}
        onShowSizeChange={onShowSizeChange}
        defaultPageSize={40}
        pageSizeOptions={pageSizeOptions}
        showTotal={(total, range) =>
          `Total ${range[0]}-${range[1]} of ${total} items`
        }
      />
    </div>
  );
};

export default PaginationImage;
