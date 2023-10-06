
import { Box, Grid } from '@mui/material'
import storeItems from '../data/items.json'

import { StoreItem } from '../components/StoreItem'

export function Store() {

  return (
    <>
    <h1 className='mt-5'>Store</h1>
    <br />

    <Box 
    // sx={{ flexGrow: 1, display: 'flex' }}
    mx={1.5} >
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {storeItems.map(item => (
          // <div key={item.id}>{JSON.stringify(item)}</div>
          <Grid item xs={12} sm={4} lg={5}
          // sx={{wordWrap:'break-word'}}
          >
            <StoreItem {...item} />
          </Grid>

        ))}
      </Grid>
    </Box>


    </>

  )
}

