import {
  Icon,
  Link,
  Flex,
  View,
  useTheme,
  Button,
} from '@aws-amplify/ui-react';

import * as icons from './../../data/icon';
import { Logo } from './../Logo';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const Footer = () => {
  const { tokens } = useTheme();
  return (
    <Flex as="footer" direction="column" className="docs-footer">
      <Flex direction="row" justifyContent="center">
        <Logo />
      </Flex>
      <View textAlign="center">
        <Button
          as={Link}
          variation="link"
          gap={tokens.space.small}
          alignItems="baseline"
          color={tokens.colors.font.tertiary}
          href="https://github.com/entest-hai"
          isExternal={true}
        >
          <Icon ariaLabel="Github" pathData={icons.GITHUB} />
          Github
        </Button>
        <Button
          as={Link}
          variation="link"
          gap={tokens.space.small}
          alignItems="baseline"
          color={tokens.colors.font.tertiary}
          href="https://www.linkedin.com/in/minhhaitran/"
          isExternal={true}
        >
          <IoLogoLinkedin></IoLogoLinkedin>
          Linkedin
        </Button>
      </View>
      <Flex direction="row">
        <View>
          Amplify open source, documentation and community are supported by
          Amazon Web Services © {new Date().getFullYear()}, Amazon Web Services,
          Inc. and its affiliates. All rights reserved. View the{' '}
          <Link isExternal={true} href={'/'}>
            site terms
          </Link>{' '}
          and{' '}
          <Link isExternal={true} href={'/'}>
            privacy policy
          </Link>
          .
          <View margin={`${tokens.space.medium} 0 0 0`}>
            Flutter and the related logo are trademarks of Google LLC. We are
            not endorsed by or affiliated with Google LLC.
          </View>
        </View>
      </Flex>
    </Flex>
  );
};
