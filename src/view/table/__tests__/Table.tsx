import React, { Component } from 'react';
import { shallow, HTMLAttributes, ShallowWrapper } from 'enzyme';
import { Table } from '../..';

interface Props {
  data: {}[];
  className?: string;
  headerSpec?: { [key: string]: { width?: string; headerClassName?: string; dataClassName?: string } };
}

const renderTable = (props: Props) => shallow(<Table {...props} />);

const validateTable = (
  display: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>,
  expectedHeaaderNames: string[],
  expectedDataRows: number
): ShallowWrapper<HTMLAttributes, any, Component<{}, {}, any>> => {
  expect(display.hasClass('react-table')).toBe(true);

  const headerRow = display.find('thead tr');

  expect(headerRow.length).toBe(1);

  const headers = headerRow.children();
  for (let i = 0; i < expectedHeaaderNames.length; i++) {
    expect(headers.at(i).text()).toBe(expectedHeaaderNames[i]);
  }

  const dataRows = display.find('tbody tr');
  expect(dataRows.length).toBe(expectedDataRows);
  return dataRows;
};

describe('html table', () => {
  it('renders with basic data', () => {
    const headers = ['a', 'b', 'c'];
    const data = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }, { a: 7, b: 8, c: 9 }];
    const display = renderTable({ data });

    const rows = validateTable(display, headers, data.length);

    const row1Cols = rows.at(0).children();
    expect(row1Cols.at(0).text()).toBe('1');
    expect(row1Cols.at(1).text()).toBe('2');
    expect(row1Cols.at(2).text()).toBe('3');

    const row2 = rows.at(1);
    expect(row2.childAt(0).text()).toBe('4');
    expect(row2.childAt(1).text()).toBe('5');
    expect(row2.childAt(2).text()).toBe('6');

    const row3 = rows.at(2);
    expect(row3.childAt(0).text()).toBe('7');
    expect(row3.childAt(1).text()).toBe('8');
    expect(row3.childAt(2).text()).toBe('9');
  });

  fit('renders with staggered data', () => {
    const headers = ['a', 'b', 'c'];
    const data = [{ a: 1 }, { b: 5 }, { c: 9 }];
    const display = renderTable({ data });

    const rows = validateTable(display, headers, data.length);

    expect(
      rows
        .at(0)
        .childAt(0)
        .text()
    ).toBe('1');

    expect(
      rows
        .at(1)
        .childAt(1)
        .text()
    ).toBe('5');

    expect(
      rows
        .at(2)
        .childAt(2)
        .text()
    ).toBe('9');
  });
});
