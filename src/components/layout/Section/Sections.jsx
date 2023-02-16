export default function Section({ sectionClass = 'section', children }) {
  return <section className={[sectionClass]}>{children}</section>;
}
