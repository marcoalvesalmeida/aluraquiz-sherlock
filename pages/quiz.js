import { useRouter } from 'next/router';

export default function Quiz() {
    const router = useRouter();

    return (
        <p style={{ color: '#000' }}>
            Olá,
            {' '}
            {router.query.name}
      !
        </p>
    );
}
