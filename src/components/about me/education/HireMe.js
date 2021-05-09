import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import styles from './hireMe.module.css'


export const HireMe = ({open}) => {


    return (
        <Box width={300} style={{
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            {open && <Card width={300} className={styles.showHireMe}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        Now it's you chance to hire me!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Send Message</Button>
                </CardActions>

            </Card>}

        </Box>
    )
}
