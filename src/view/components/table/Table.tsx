import React, { Component } from 'react';
import classNames from 'classnames';

interface HeaderSpec {
  [key: string]: { width?: string; headerClassName?: string; dataClassName?: string };
}

interface Props {
  data: {}[];
  className?: string;
  headerSpec?: HeaderSpec;
}

const initialState = {};
type State = typeof initialState;

class Table extends Component<Props, State> {
  state: State = initialState;

  render() {
    const { className, data, headerSpec = {} } = this.props;

    const newClassName = classNames('react-table', className);

    const headers = {} as { [key: string]: { name: string; width?: string; className?: string; } };
    const headerNames = [] as string[];

    const rows = data.map((row: any) => {
      let cols = [] as { value: any; className?: string }[];

      Object.keys(row).forEach(name => {
        const value = row[name];
        const spec = headerSpec[name] || {};

        if (!headers[name]) {
          const { width, headerClassName: className} = spec;

          headers[name] = { name, width, className };
          headerNames.push(name);
        }

        const col = { value, className: spec.dataClassName };

        // TODO: check to see if you can just use the splice function
        const newIndex = headerNames.indexOf(name);
        if (cols.length === newIndex) {
          cols.push(col);
        } else {
          cols.splice(newIndex, 0, col);
        }
      })
      console.log(cols);
      return cols;
    })

    return (
      <table className={newClassName}>
        <thead>
          <tr>
            {headerNames
              .map(name => headers[name])
              .map(({ name, width, className }) => (
                <th
                  className={classNames(className)}
                  style={width ? { width } : {}}
                  key={name + className + width}
                >
                  {name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            const columns = [] as JSX.Element[];
            const rowKey = row
              .map(({ value, className }) => {
                const key = JSON.stringify(value) + className;
                columns.push(
                  <td className={classNames(className)} key={key}>
                    {value}
                  </td>
                );
                return key;
              })
              .join();
            return <tr key={rowKey}>{columns}</tr>;
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
