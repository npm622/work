import React from 'react';
import { Card, Database, Flex, Heading, Text } from '@makes-apps/lib';

import { Blog } from '../../types';

interface Props {
  blogs: Database<Blog>;
}

const ListThoughts = ({ blogs }: Props) => (
  <Flex justifyContent="space-around" wrap="wrap" padding="1rem">
    {Object.values(blogs || {}).map(blog => (
      <Card fixedWidth size="s" maxHeight="480px" bottomMargin title={<Heading>{blog.title}</Heading>}>
        <Text whiteSpace="pre-line">{blog.content}</Text>
      </Card>
    ))}
  </Flex>
);

export default ListThoughts;
