import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  Container,
  Button,
  OtlinedButton,
  Card,
  AppBar,
  CardContainer,
  Main,
  LinkList,
  ImageWrapper,
  TextWrapper,
  Background,
} from '../components/sharedstyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Голосовые ассистенты Smart Dialogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AppBar>
          <Link href="/">
            <Image
              src="/voice-assistant/logo.svg"
              alt="Vercel Logo"
              width={195}
              height={34}
              priority
            />
          </Link>
          <LinkList>
            <li>О нас</li>
            <li>
              <Link href="/charts">Платформа</Link>
            </li>
            <li>Портфолио</li>
            <li>Контакты</li>
          </LinkList>
          <Link href="/login">
            <OtlinedButton>Вход</OtlinedButton>
          </Link>
        </AppBar>
        <Main>
          <TextWrapper>
            <h1>
              Голосовые ассистенты <span>SmartDialogs</span>
            </h1>
            <p>
              В звонках бот ведёт осмысленный диалог <br /> и совершенно
              неотличим от живого оператора. Автоматизируйте телефонные звонки с
              помощью ИИ.
            </p>
            <Button>Оставить заявку</Button>
          </TextWrapper>
          <ImageWrapper>
            <Image
              src="/voice-assistant/woman.jpg"
              alt="Vercel Logo"
              width={450}
              height={532}
              className="image"
              priority
            />
          </ImageWrapper>
        </Main>
        <CardContainer>
          <Card>
            <h3>3 года на рынке</h3>
            <p>Более 1000 разработанных ботов в РФ и зарубежом</p>
          </Card>
          <Card>
            <h3>Честная цена</h3>
            <p>Оплата только за использованные минуты</p>
          </Card>
          <Card>
            <h3>Скорость</h3>
            <p>Запускаем проекты за 3 недели, не теряя в качестве</p>
          </Card>
          <Card>
            <h3>Личный кабинет</h3>
            <p>Отслеживание результатов звонков в личном кабинете</p>
          </Card>
        </CardContainer>
        <div className="circle" />
      </Container>
      <Background />
    </>
  );
}
