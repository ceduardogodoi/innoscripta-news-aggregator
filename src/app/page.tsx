import { NewsSource } from "@/components/organisms/news-source";

export type HomePageProps = {
  searchParams: {
    q?: string;
  };
};

export default function HomePage(props: HomePageProps) {
  return <NewsSource searchParams={props.searchParams} />;
}
