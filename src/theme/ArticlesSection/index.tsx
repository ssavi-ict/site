import React from "react";
import { Card, CardProps } from "../Card";
import { CardsArea } from "../CardsArea";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

const articles: CardProps[] = [
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna",
    meta: "01. Example Article",
    title: "Example Article",
  },
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna2",
    meta: "02. Example Article",
    title: "Example Article",
  },
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna3",
    meta: "03. Example Article",
    title: "Example Article",
  },
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna4",
    meta: "04. Example Article",
    title: "Example Article",
  },
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna5",
    meta: "05. Example Article",
    title: "Example Article",
  },
  {
    description: "Lorem ipsum typesum TypeScript etc. etc. etc.",
    href: "/article/analyzing-dna6",
    meta: "06. Example Article",
    title: "Example Article",
  },
];

export const ArticlesSection = () => {
  return (
    <MainArea>
      <CardsArea
        className={styles.articlesSection}
        description="Top tips and tricks for why TypeScript behaves the way it does, and how you can work effectively with it."
        heading="Articles"
        link={{
          children: "See all XYZ articles",
          href: "/articles",
        }}
      >
        {articles.map((article) => (
          <Card className={styles.card} {...article} key={article.href} />
        ))}
      </CardsArea>
    </MainArea>
  );
};
