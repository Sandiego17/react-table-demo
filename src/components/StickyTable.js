import { useBlockLayout, useTable } from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useMemo } from 'react'
import './BasicTable.css'
import { useSticky } from 'react-table-sticky'
import { Styles } from './StickyTableStyles'

export const StickyTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  }, useBlockLayout, useSticky)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance

  const fisrtPageRows = rows.slice(0, 20)

  return (
    <>
      <div>
        <h1>React Table Sticky</h1>
      </div>

      <Styles>
        <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render('Header')}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {fisrtPageRows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="footer">
            {footerGroups.map((footerGroup) => (
              <div {...footerGroup.getHeaderGroupProps()} className="tr">
                {footerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="td">
                    {column.render('Footer')}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Styles>
    </>
  );
}