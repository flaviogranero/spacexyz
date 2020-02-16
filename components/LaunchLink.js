import Link from 'next/link';

export default function LaunchLink({ id, children }) {
  return (
    <Link href="/launch/[id]" as={`/launch/${id}`}>
      <a>{children}</a>
    </Link>
  );
}
