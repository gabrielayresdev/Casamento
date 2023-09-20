import React from "react";

const usePagination = (lastPage: number) => {
  const [page, setPage] = React.useState<number>(1);

  function goNext() {
    if (page + 1 <= lastPage) {
      setPage(page + 1);
    }
  }

  function goBefore() {
    if (page - 1 >= 0) {
      setPage(page - 1);
    }
  }
  return { page, goBefore, goNext };
};

export default usePagination;
