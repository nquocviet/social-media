import React from 'react'
import Layout from './Layout'
import { Grid } from '@/components/Grid'
import { UserCard } from '@/components/User'

const Following = () => {
  return (
    <Layout>
      <Grid row={true}>
        {[...Array(30)].map((_, index) => (
          <Grid xs={12} sm={6} xl={4} key={index} column={true}>
            <UserCard />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Following
