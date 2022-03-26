import PageLayout from 'components/PageLayout';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
import PageTitle from 'components/PageTitle';
import ContentCard from 'components/ContentCard';
import SuccessStories from 'components/SuccessStories';
import { getAllAboutUsCard } from 'lib/api';

export default function About({aboutUs}) {
  if (!aboutUs) {
    return 'Loading!';
  }
  return (
    <PageLayout>
      <PageTitle
        title='Who are we?'
        content='Equitise is a trusted investment platform that raises capital for extraordinary companies and startups through investors looking to back innovative founders.'
        subtitle='ABOUT EQUITISE'
      />

      <div>
        {aboutUs.map(
          ({ image, title, subtitle, content, link, href }, index) => (
            <ContentCard
              image={image}
              content={content}
              subtitle={subtitle}
              title={title}
              link={link}
              href={href}
              index={index}
            />
          )
        )}
      </div>
      <SuccessStories limit='1'/>
      <Newsletter />
      <NewsSlider />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const aboutUs = await getAllAboutUsCard({ offset: 0 });
  return {
    props: {
      aboutUs,
    },
  };
}
