import { useState } from 'react';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import { QuizContainer } from '../styles/pages/home';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function handleSubmitForm(e) {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleSubmitForm}>
              <Input
                placeholder="Diz aí seu nome para jogar :)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marcoalvesalmeida" />
    </QuizBackground>
  );
}
