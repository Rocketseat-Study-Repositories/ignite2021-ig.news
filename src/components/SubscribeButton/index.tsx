import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  function HandleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={HandleSubscribe}
    >
      Subscribe now
    </button>
  );
};
