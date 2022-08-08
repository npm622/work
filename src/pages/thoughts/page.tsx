import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { Database, RouterActions } from '@makes-apps/lib';

import { RootConnectors } from '../../root';
import { blogsActions, BlogsActions } from '../../store';
import { Blog, User } from '../../types';

import ListThoughts from './list';
import NewThought from './new';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  blogs: Database<Blog>;
  user?: User;
}

interface DispatchProps {
  createBlog: BlogsActions['create'];
  goto: (url: string) => void;
  listBlogs: BlogsActions['list'];
}

type Props = OwnProps & StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  componentDidMount() {
    const { listBlogs } = this.props;
    Promise.all([listBlogs({})]);
  }

  render() {
    const { blogs, createBlog, goto, match, user } = this.props;
    if (!user) {
      return <>loading user permissions...</>;
    }
    console.log(match.url);
    return (
      <Switch>
        <Route exact path={match.url} render={() => <ListThoughts blogs={blogs} />} />
        <Route
          exact
          path={`${match.url}/new`}
          render={() => <NewThought createBlog={createBlog} gotoList={() => goto(match.url)} />}
        />
      </Switch>
    );
  }
}

export default RootConnectors.withDispatchObject(
  ({ auth, blogs }) => ({
    blogs: blogs.db,
    user: auth.user,
  }),
  {
    createBlog: blogsActions.create,
    goto: RouterActions.goto.creator.worker,
    listBlogs: blogsActions.list,
  }
)(HomePage);
