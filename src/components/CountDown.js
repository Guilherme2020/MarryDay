import React from 'react';
import {StyleSheet}  from 'react-native'
import CountDown from 'react-native-countdown-component';
import moment from 'moment'

const styles = StyleSheet.create({
    digitStyle:{
        backgroundColor:'white'
    },
    timeLabelStyle:{
        color: 'white', fontSize: 12
    }
})
export function getTimeDurationMarry(totalDuration){

    let date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss')
    
    let expirydate = '2019-11-16 19:00:00'

    let diffr = moment.duration(moment(expirydate).diff(moment(date)))

    let hours = parseInt(diffr.asHours())

    let minutes = parseInt(diffr.minutes())

    let seconds = parseInt(diffr.seconds())

    let total =  hours * 60 * 60 + minutes * 60 + seconds
    
    totalDuration =  total

    return totalDuration;
    


}

export const CountdownComponent = (props) => {


    return(
        <CountDown
            until={props.until}
            digitStyle={styles.digitStyle}
            timeLabelStyle={styles.timeLabelStyle}
            //duration of countdown in seconds
            timetoShow={('D', 'H', 'M', 'S')}
            //formate to show
            timeLabels={{ d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos' }}
            onFinish={() => alert('finished')}
            //on Finish call
            onPress={() => alert('hello')}
            //on Press call
            size={20}
      />
    )

}

