import { LoremIpsum } from './components';

export default async function InternalPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <LoremIpsum slug={slug} />;
}
