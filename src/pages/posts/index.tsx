import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Posts with titles are the best ones</strong>
            <p>A quick resome of how the paragraphs will look like.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Posts with titles are the best ones</strong>
            <p>A quick resome of how the paragraphs will look like.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Posts with titles are the best ones</strong>
            <p>A quick resome of how the paragraphs will look like.</p>
          </a>
        </div>
      </main>
    </>
  );
}
