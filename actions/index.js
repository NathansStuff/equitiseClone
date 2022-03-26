import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetNews = initialData => {
  return useSWR(`/api/news`, fetcher, { initialData });
};

export const useGetCompanies = initialData => {
  return useSWR(`/api/companies`, fetcher, { initialData });
};

export const useGetInvestments = initialData => {
  return useSWR(`/api/investments`, fetcher, { initialData });
};

export const useGetTestimonys = initialData => {
  return useSWR(`/api/testimonys`, fetcher, { initialData });
};

export const useGetAboutUsCard = initialData => {
  return useSWR(`/api/aboutUsCards`, fetcher, { initialData });
};

export const useGetTeams = initialData => {
  return useSWR(`/api/teams`, fetcher, { initialData });
};
