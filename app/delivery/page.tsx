import type { Metadata } from 'next';

import React from 'react';

import { Contacts } from '@/components/shared/contacts';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { deliveryQuestions } from '@/config/delivery/delivery';

export const metadata: Metadata = {
  title: 'Доставка неоновой вывески по всей России за 3 дня'
};

export default function DeliveryPage() {
  return (
    <Main>
      <AppearingContainer className='mb-36' isHero>
        <Heading
          className='mb-6 mt-24 md:mb-12'
          as='h1'
          hasUnderline
        >
          <AppearingText>
            <AppearingAnimationText>
              <AppearingAnimationTextPart>
                Какие
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                способы
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText>доставки</GradientText>
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                есть?
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Какие способы
              {' '}
              <GradientText>доставки</GradientText>
              {' '}
              есть?
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <Tabs
          className='mb-12 grid gap-x-24 gap-y-9 md:mb-24 lg:grid-cols-[min-content_auto]'
          defaultValue={deliveryQuestions[0].value}
        >
          <TabsList
            className='flex-col items-start justify-start rounded-none bg-transparent'
            variant='ghost'
          >
            {deliveryQuestions.map((item, index) => (
              <TabsTrigger
                key={index}
                className='justify-start p-1 !px-0 text-sm font-bold opacity-100 transition-opacity before:mr-[0.5em] before:block before:size-[0.5em] before:rounded-full before:bg-foreground before:transition-all data-[state=active]:bg-transparent data-[state=inactive]:opacity-80 data-[state=active]:shadow-none data-[state=inactive]:before:mr-0 data-[state=inactive]:before:size-0 sm:text-sm md:p-2 md:text-lg lg:p-3 lg:text-base xl:text-lg 2xl:text-xl'
                value={item.value}
              >
                {item.question}
              </TabsTrigger>
            ))}
          </TabsList>
          {deliveryQuestions.map((item, index) => (
            <TabsContent
              key={index}
              className='space-y-[1em] px-1 text-sm !leading-loose md:text-base lg:pl-0 lg:text-lg'
              tabIndex={-1}
              value={item.value}
            >
              {item.answer}
            </TabsContent>
          ))}
        </Tabs>
      </AppearingContainer>
      <AppearingContainer>
        <Heading className='mb-12 before:slide-in-from-left-0' as='h2' hasUnderline>
          <AppearingText>
            <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
              <AppearingAnimationTextPart>
                Как
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                с
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                нами
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText>связаться?</GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Как с нами
              {' '}
              <GradientText>связаться?</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <Contacts />
      </AppearingContainer>
    </Main>
  );
}
