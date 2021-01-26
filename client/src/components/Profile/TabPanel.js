import React from 'react'
import { Box } from '@material-ui/core'

const TabPanel = ({ value, index, children }) => {
    return (
        <div hidden={index !== value}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    )
}

export default TabPanel