import { NewsSource } from "@/components/organisms/news-source";

export type HomePageProps = {
  searchParams: {
    q?: string;
  };
};

// time-based cache revalidation
// 1 hour | 3600 sec = 60 sec * 60 min
export const revalidate = 60 * 60;

export default function HomePage(props: HomePageProps) {
  return <NewsSource searchParams={props.searchParams} />;
}
