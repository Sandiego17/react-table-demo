import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useMemo } from 'react'
import './BasicTable.css'

export const RowSelectionTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = tableInstance

  const firstTenRows = rows.slice(0, 10)

  return (
    <>
      <div>
        <h1>React Table</h1>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstTenRows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <th {...column.getFooterProps()}>{column.render('Footer')}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}