"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  Button,
} from "@nextui-org/react";
import useSWR from "swr";

interface Job {
  title: string;
  company: string;
  location: string;
  site: string;
  job_url: string;
  job_url_direct: string;
}

interface JobsResponse {
  jobs: Job[];
  count: number;
}

const columns = ['Site', 'Title', 'Company', 'Location'];

const fetcher = async (url: string): Promise<JobsResponse> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default function App() {
  const [page, setPage] = useState(1);
  const [fetchData, setFetchData] = useState(false);

  const { data, error, isLoading } = useSWR<JobsResponse>(
    fetchData ? `/api/python?page=${page}` : null,
    fetcher,
    {
      keepPreviousData: true,
      revalidateOnFocus: false, // Optional: prevent revalidation on window focus
    }
  );

  const rowsPerPage = 5;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const handleFetchData = () => {
    setFetchData(true);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
            <button onClick={handleFetchData} className="relative dark:border-white border-black-100 dark:text-white text-black-100 text-sm mobile:text-base tablet:text-xl uppercase font-bold py-2 px-4 rounded-lg border-2 hover:opacity-80 hover:scale-105 duration-200">
        Load Jobs
      </button>
      {fetchData && (
        <>
          {error && <div>Error loading data</div>}
          <Table
            aria-label="Jobs"

            bottomContent={
              pages > 0 ? (
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="default"
                    page={page}
                    total={pages}
                    onChange={handlePageChange}
                  />
                </div>
              ) : null
            }
          >
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column}>{column}</TableColumn>
              ))}
            </TableHeader>
            <TableBody
              items={data?.jobs ?? []}
              loadingContent={<Spinner />}
              loadingState={isLoading ? "loading" : "idle"}
            >
              {(item: Job) => (
                <TableRow key={item.title}>
                  <TableCell><a href={`${item.job_url}`}>{item.site}</a></TableCell>
                  <TableCell>{item.job_url_direct !== null ? <a href={`${item.job_url_direct}`}>{item.title}</a> : item.title}</TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.location}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}
