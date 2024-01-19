export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth'
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Full Name',
    Footer: 'Full Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender'
      },
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }

]
