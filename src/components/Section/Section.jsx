// import { Children } from "react"
import { Section } from '../Section/Section.styled';

export const SectionBox = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};
