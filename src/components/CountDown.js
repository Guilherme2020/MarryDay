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

//funcao para capturar a duracao de dias ate a data selecionada. 
export function getTimeDurationMarry(totalDuration){

    // com a biblioteca moment, capturo a data atual com a formatacao que desejo
    // a funcao utcOffset captura a sequência da data e formata no padrao ISO8601
    let date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss')
    
    // data final que desejo comparar com a data atual 
    let expirydate = '2019-11-16 19:00:00'

    //diferença entre  a data final e a data atual atravez da funcao duration e 
    //diff do moment
    let diffr = moment.duration(moment(expirydate).diff(moment(date)))

    //pegando a hora e convertentendo pra inteiro
    let hours = parseInt(diffr.asHours())
    //pegando os  minutos e convertentendo pra inteiro

    let minutes = parseInt(diffr.minutes())

    //pegando os segundos e convertendo pra inteiro
    let seconds = parseInt(diffr.seconds())

    //nesse momento a duracao total deve ser formatada com as horas minutos e segundos 
    let total =  (hours * 60 * 60) + (minutes * 60 + seconds)
    
    // o totalDuration é o parametro que chamei no argumento da funcao,
    totalDuration =  total

    return totalDuration;
    


}
//component responsavel por receber no paramentro until a duracao total, nesse caso utilizando 
//props então delego a quem  chamar esse componente passar o valor.
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

