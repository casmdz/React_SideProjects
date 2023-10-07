
import { Box, Grid } from '@mui/material'
import storeItems from '../data/items.json'

import { StoreItem } from '../components/StoreItem'

export function Store() {

  return (
    <>
    <Box mx={1.5} p={5}>
      <Grid container spacing={3} mb={4} sx={{ justifyContent: 'center' }}>
        {storeItems.map(item => (
          <Grid item xs={12} sm={4} lg={5}
          >
            <StoreItem {...item} />
          </Grid>

        ))}
      </Grid>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, aperiam iste. Sunt ipsa, ad totam laudantium enim dolore debitis! Omnis quis, pariatur aspernatur vel error accusantium iure quasi ea minima dignissimos dolore voluptate, mollitia hic doloremque molestias ab incidunt aliquam ratione reprehenderit libero eum unde sapiente. Totam fuga autem accusamus?</p>
    </Box>

    </>

  )
}

