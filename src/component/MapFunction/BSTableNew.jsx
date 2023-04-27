import React from 'react'
import { Table } from 'react-bootstrap'

function BSTableNew() {
  const data = [
    { Date: '1/23/10', region: 'ontario', rep: 'Kivell', item: 'Binder', unitCost: '$19.99', total: '$999.50', units: '50' },
    { Date: '2/09/10', region: 'ontario', rep: 'jardine', item: 'pencil', unitCost: '$4.99', total: '$179.50', units: '36' },
    { Date: '2/26/10', region: 'ontario', rep: 'gill', item: 'pen', unitCost: '$19.99', total: '$539.50', units: '27' },
    { Date: '3/15/10', region: 'Alberta', rep: 'Sorvino', item: 'pencil', unitCost: '$2.99', total: '$167.50', units: '56' },
    { Date: '4/1/10', region: 'Quebec', rep: 'Jones', item: 'Binder', unitCost: '$4.99', total: '$299.50', units: '60' },
    { Date: '4/18/10', region: 'ontario', rep: 'andrews', item: 'pencil', unitCost: '$1.99', total: '$149.50', units: '75' },
    { Date: '5/5/10', region: 'ontario', rep: 'jardine', item: 'pencil', unitCost: '$4.99', total: '$449.50', units: '90' },
    { Date: '5/22/10', region: 'alberta', rep: 'thompson', item: 'pencil', unitCost: '$1.99', total: '$63.50', units: '32' }
  ]
  const headerData = ['Order Date', 'Region', 'Rep', 'Item', 'Units', 'Unit Cost', 'Total']
  return (
    <div  style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <Table responsive bordered className='w-75'>
        <thead>
          <tr>
            { 
              headerData.map((header) => {
                return (
                  <th>{header}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((value) => {
              return (
                <tr>
                  <td>{value.Date}</td>
                  <td>{value.region}</td>
                  <td>{value.rep}</td>
                  <td>{value.item}</td>
                  <td>{value.units}</td>
                  <td>{value.unitCost}</td>
                  <td>{value.total}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default BSTableNew
