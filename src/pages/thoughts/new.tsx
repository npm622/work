import React from 'react';
import { Button, Form, FormControl, FormFooter, FormGroup, FormInput, FormLabel } from '@makes-apps/lib';

import { BlogsActions } from '../../store';
import { Blog } from '../../types';

interface Props {
  createBlog: BlogsActions['create'];
  gotoList: () => void;
}

interface FormData extends Blog {}

const initialForm: FormData = { date: new Date(), author: 'nick@makes.life', type: 'rant', title: '', content: '' };

const NewThought = ({ createBlog, gotoList }: Props) => (
  <Form initialData={initialForm} onSubmit={data => createBlog(data).then(gotoList)}>
    {({ data, handlers, statuses }) => (
      <>
        <FormGroup inline>
          <FormControl name="author">
            <FormLabel>author</FormLabel>
            <FormInput value={data.author} status={statuses.author} onChange={handlers.input.onChange} />
          </FormControl>
          <FormControl name="type">
            <FormLabel>type</FormLabel>
            <FormInput value={data.type} status={statuses.type} onChange={handlers.input.onChange} />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl name="title">
            <FormLabel>title</FormLabel>
            <FormInput value={data.title} status={statuses.title} onChange={handlers.input.onChange} />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl name="content">
            <FormLabel>content</FormLabel>
            <FormInput
              as="textarea"
              rows={20}
              value={data.content}
              status={statuses.content}
              onChange={handlers.input.onChange}
            />
          </FormControl>
        </FormGroup>
        <FormFooter>
          <Button as="button" type="submit" color="primary" variant="ghost">
            Save Thought
          </Button>
        </FormFooter>
      </>
    )}
  </Form>
);

export default NewThought;
