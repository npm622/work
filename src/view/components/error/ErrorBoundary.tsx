import React from 'react';

interface State {
  err?: Error;
}

class ErrorBoundary extends React.Component<{}, State> {
  state: State = {};

  componentDidCatch(err: Error, info: Object): void {
    this.setState(() => ({ err }));
    console.log(`caught error: ${JSON.stringify(err)}`);
    console.log(info);
  }

  render() {
    const { children } = this.props;

    if (this.state.err) {
      const { err } = this.state;
      return (
        <div className="error-boundary">
          <h1 className="error-boundary-title">Oops...this error is no yolk!</h1>
          <p className="error-boundary-advice">
            Try refreshing the page. If the problem persists, then we are already aware of this issue. Hang tight!
          </p>
          <hr />
          <div className="error-boundary-details">
            <h5>{err.name}</h5>
            <pre>{err.message}</pre>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
