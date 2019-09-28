import React from 'react';
import { useHeadline, Button, Flex, Heading, Subheading, Text } from '@makes-apps/lib';

import urls from '../../urls';

interface Props {
  eggcorn: boolean;
}

const WelcomePage = ({  }: Props) => {
  const { setHeadline } = useHeadline();

  React.useEffect(() => {
    setHeadline('Thanks for stopping by!');
    return () => setHeadline();
  }, []);

  return (
    <Flex direction="column" overflow="auto" padding="0 1rem">
      <Heading color="secondary">Wondering what this is all about?</Heading>
      <Text>Me too!</Text>
      <Heading color="secondary">OK, but really, what is this?</Heading>
      <Text>
        It technically started back on January 20, 2016, at least that's when the domain name was bought. That was a
        pretty big day for me: I finally spent my own money on one of my own side projects. Up to now, it was just free
        tiers and public repos. (Still is if we're being really honest here...)
      </Text>
      <Text>
        If you're a long-time follower of this site{' '}
        <Text as="span" look="italic">
          (and unless your name is Will you're not)
        </Text>
        , then you'll know what you see now is definitely not what you've seen in the past. You'll also know that what
        you see tomorrow might be completely different from what you see now.
      </Text>
      <Text look="italic">(Fun fact: I'm generally slow to the point when talking.)</Text>
      <Text>
        It would be my suggestion to not bookmark anything here. This site is where I go to try out any of the random
        ideas that are constantly running through my head.
      </Text>
      <Subheading>So it's a sandbox.</Subheading>
      <Text>Yup, try not to get your feet dirty!</Text>
      <Text look="italic">
        (Funner fact: I'm what you could describe as "Occam's Humor" -- the easiest joke to make is the one I will.)
      </Text>
      <Text>
        If you have any ideas to add to this site or just want to reach out, you can always let me know through the{' '}
        <Button as="Link" to={urls.contact()} variant="text" padding="none">
          Contact Page
        </Button>
        .
      </Text>
    </Flex>
  );
};

export default WelcomePage;
