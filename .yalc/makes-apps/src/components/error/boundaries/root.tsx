import React from 'react';

interface State {
  error?: Error;
}

class RootErrorBoundary extends React.Component<{}, State> {
  readonly state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: any, info: any) {
    console.log(`caught error: ${JSON.stringify(error)}`);
    console.log(info);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <>
          <h1 className="error-boundary-title">Oops...this error is no yolk!</h1>
          <p className="error-boundary-advice">
            Try refreshing the page. If the problem persists, then we are already aware of this issue. Hang tight!
          </p>
          <div className="error-boundary-details">
            <h2 className="error-boundary-details-title">{`${error.name}:`}</h2>
            <pre className="error-boundary-details-message">{error.message}</pre>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default RootErrorBoundary;
