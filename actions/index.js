import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetNews = initialData => {
  return useSWR(`/api/news`, fetcher, { initialData });
};

export const useGetCompanies = initialData => {
  return useSWR(`/api/companies`, fetcher, { initialData });
};

export const useGetInvestments = initialData => {
  return useSWR(`/api/investments`, fetcher, { initialData });
};
