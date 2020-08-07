import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CounterUp from 'react-countup';
import cx from 'classnames'

const Cards=({data:{confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component ={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                    <CounterUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Number of Total cases so far COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recoverd
                    </Typography>
                    <Typography variant="h5">
                    <CounterUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Number of Recovered from COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h5">
                    <CounterUp start={0} end={deaths.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Number of Deaths by COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Active
                    </Typography>
                    <Typography variant="h5">
                    <CounterUp start={0} end={(confirmed.value)-(recovered.value+deaths.value)} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Number of Active Cases in COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            </Grid>
        </div>
    );
}

export default Cards;