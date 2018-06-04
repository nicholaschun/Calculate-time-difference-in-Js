getTimeDiffInMinutes (start,end){
        let startTime = new Date('10/10/2010 ' + start + ':00').getTime()
        let endTime = new Date('10/10/2010 '+ end + ':00').getTime()    //time in millisecnds
        let diff = Math.abs(endTime - startTime)/1000    // diff in secs
        let diffInMinutes = diff/60   // diff in minutes
        if(diffInMinutes < 60){
          return diffInMinutes + 'mins'
        }
        if(diffInMinutes > 59){
          let hour = Math.round(diffInMinutes/60)
          let minute = Math.round(diffInMinutes % 60)
          if(minute === 0){
            return hour + 'hour(s) '
          }
          return hour + 'hour(s) '+ minute + 'mins'
        }
      }
