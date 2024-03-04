import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Icon from 'src/@core/components/icon'

const TableHeader = () => {
  const handleFilter = () => {
    return
  }

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Button color='secondary' variant='outlined' startIcon={<Icon icon='tabler:upload' />}>
        Export
      </Button>
      {/* TODO: Submit */}
      <form onSubmit={e => e.preventDefault()} style={{ display: 'flex' }}>
        <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField size='small' sx={{ mr: 2 }} placeholder='검색어를 입력하세요...' onChange={e => handleFilter()} />
        </Box>
        <Button type='submit' variant='contained' size='large'>
          검색
        </Button>
      </form>
    </Box>
  )
}

export default TableHeader
